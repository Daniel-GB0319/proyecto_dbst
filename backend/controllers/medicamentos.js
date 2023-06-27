import { pool } from "../db.js";

// Registrar un nuevo medicamento
export const insertMedicamento = async (req, res) => {
  const {nombre, compuesto, descripcion, farmaceutica, cantidad, precio, req_receta } = req.body;

  if (!nombre || !compuesto || !farmaceutica || !cantidad || !precio) {
    return res.status(400).json({ message: "Faltan campos requeridos para registrar el medicamento" });
  }

  try {
    await pool.query(
      "INSERT INTO db_medicamento (nombre, compuesto, descripcion, farmaceutica, cantidad, precio, req_receta) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nombre, compuesto, descripcion, farmaceutica, cantidad, precio, req_receta]
    );

    return res.status(200).json({ message: "Medicamento registrado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de un medicamento
export const updateMedicamento = async (req, res) => {
  const { id_medicamento, nombre, compuesto, descripcion, farmaceutica, cantidad, precio, req_receta } = req.body;

  if (!id_medicamento || !nombre || !compuesto || !farmaceutica || !cantidad || !precio) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar el medicamento" });
  }

  try {
    await pool.query(
      "UPDATE db_medicamento SET nombre = ?, compuesto = ?, descripcion = ?, farmaceutica = ?, cantidad = ?, precio = ?, req_receta = ? WHERE id_medicamento = ?",
      [nombre, compuesto, descripcion, farmaceutica, cantidad, precio, req_receta, id_medicamento]
    );

    return res.status(200).json({ message: "Medicamento modificado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un medicamento
export const deleteMedicamento = async (req, res) => {
  const { id_medicamento } = req.body;

  if (!id_medicamento) {
    return res.status(400).json({ message: "Falta el ID del medicamento a eliminar" });
  }

  try {
    await pool.query("DELETE FROM db_medicamento WHERE id_medicamento = ?", [id_medicamento]);

    return res.status(200).json({ message: "Medicamento eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar la cantidad de un medicamento
export const updateCantidadMedicamento = async (req, res) => {
  const { id_medicamento, cantidad } = req.body;

  if (!id_medicamento || !cantidad) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar la cantidad del medicamento" });
  }

  try {
    await pool.query(
      "UPDATE db_medicamento SET cantidad = ? WHERE id_medicamento = ?",
      [cantidad, id_medicamento]
    );

    return res.status(200).json({ message: "Cantidad del medicamento modificada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar el precio de un medicamento
export const updatePrecioMedicamento = async (req, res) => {
  const { id_medicamento, precio } = req.body;

  if (!id_medicamento || !precio) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar el precio del medicamento" });
  }

  try {
    await pool.query(
      "UPDATE db_medicamento SET precio = ? WHERE id_medicamento = ?",
      [precio, id_medicamento]
    );

    return res.status(200).json({ message: "Precio del medicamento modificado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Realiza una busqueda de un medicamento en especifico
export const queryMedicamentos = async (req, res) => {
  const { searchTerm } = req.query;

  try {
    let result;

    if (searchTerm) {
      result = await pool.query(
        "SELECT * FROM db_medicamento WHERE nombre LIKE ? OR compuesto LIKE ?",
        [`%${searchTerm}%`, `%${searchTerm}%`]
      );
    } else {
      result = await pool.query("SELECT * FROM db_medicamento");
    }

    const medicamentos = result[0];

    if (medicamentos.length === 0) {
      return res.status(404).json({ message: "No se encontraron medicamentos" });
    }

    return res.status(200).json(medicamentos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// Obtiene todos los registros de medicamentos existentes
export const getAllMedicamentos = async (req, res) => {
  try {
    const medicamentos = await pool.query("SELECT * FROM db_medicamento");

    return res.status(200).json(medicamentos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Filtra todos los registros de medicamento por Proveedor
export const queryMedicamentosPorProveedor = async (nombreProveedor) => {
  try {
    const result = await pool.query("CALL ObtenerMedicamentosPorProveedor(?)", [nombreProveedor]);
    const medicamentosPorProveedor = result[0];
    return medicamentosPorProveedor;
  } catch (error) {
    throw new Error(error.message);
  }
};
