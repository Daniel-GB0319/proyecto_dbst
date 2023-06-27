import { pool } from "../db.js";

// Crear una nueva receta
export const insertReceta = async (req, res) => {
  const { observaciones, diagnostico, medicamentos } = req.body;

  try {
    const fechaExpedicion = new Date(); // Obtener la fecha actual

    // Insertar la receta en la tabla db_receta
    const insertRecetaQuery = "INSERT INTO db_receta (fecha_expedicion, observaciones, diagnostico) VALUES (?, ?, ?)";
    const insertRecetaValues = [fechaExpedicion, observaciones, diagnostico];
    const [insertRecetaResult] = await pool.query(insertRecetaQuery, insertRecetaValues);

    const recetaId = insertRecetaResult.insertId;

    // Insertar los medicamentos de la receta en la tabla db_receta_medicamento
    for (const medicamento of medicamentos) {
      const { id_medicamento, cantidad_medicamento } = medicamento;
      const insertRecetaMedicamentoQuery = "INSERT INTO db_receta_medicamento (receta_id_receta, cantidad_medicamento, medicamento_id_medicamento) VALUES (?, ?, ?)";
      const insertRecetaMedicamentoValues = [recetaId, cantidad_medicamento, id_medicamento];
      await pool.query(insertRecetaMedicamentoQuery, insertRecetaMedicamentoValues);
    }

    // Calcular el costo total de la receta utilizando el procedimiento almacenado
    const calcularPrecioTotalQuery = "CALL CalcularPrecioTotal(?)";
    const calcularPrecioTotalValues = [recetaId.toString()];
    const [calcularPrecioTotalResult] = await pool.query(calcularPrecioTotalQuery, calcularPrecioTotalValues);
    const costoTotal = calcularPrecioTotalResult[0][0].total;

    return res.status(200).json({ message: "Receta creada con éxito", costoTotal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar una receta con todos sus medicamentos
export const queryReceta = async (req, res) => {
  const { id_receta } = req.params;

  try {
    // Obtener la receta de la tabla db_receta
    const selectRecetaQuery = "SELECT * FROM db_receta WHERE id_receta = ?";
    const selectRecetaValues = [id_receta];
    const [selectRecetaResult] = await pool.query(selectRecetaQuery, selectRecetaValues);
    const receta = selectRecetaResult[0];

    if (!receta) {
      return res.status(404).json({ message: "Receta no encontrada" });
    }

    // Obtener los medicamentos de la receta de la tabla db_receta_medicamento
    const selectMedicamentosQuery = `
      SELECT m.nombre, rm.cantidad_medicamento
      FROM db_medicamento AS m
      INNER JOIN db_receta_medicamento AS rm ON m.id_medicamento = rm.medicamento_id_medicamento
      WHERE rm.receta_id_receta = ?
    `;
    const selectMedicamentosValues = [id_receta];
    const [selectMedicamentosResult] = await pool.query(selectMedicamentosQuery, selectMedicamentosValues);
    const medicamentos = selectMedicamentosResult;

    return res.status(200).json({ receta, medicamentos });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
