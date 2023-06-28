import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [nombreTipoUsuario, setNombreTipoUsuario] = useState("");
  const [idUsuario, setIdUsuario] = useState("");

  useEffect(() => {
    // Al cargar la aplicación, recupera los valores del almacenamiento local y establece el estado del contexto
    const storedTipoUsuario = localStorage.getItem("tipoUsuario");
    const storedNombreTipoUsuario = localStorage.getItem("nombreTipoUsuario");
    const storedidUsuario = localStorage.getItem("idUsuario");

    if (storedTipoUsuario && storedNombreTipoUsuario) {
      setTipoUsuario(storedTipoUsuario);
      setNombreTipoUsuario(storedNombreTipoUsuario);
      setIdUsuario(storedidUsuario);
    }
  }, []);

  const updateUserContext = (newTipoUsuario, newNombreTipoUsuario) => {
    // Actualiza el estado del contexto
    setTipoUsuario(newTipoUsuario);
    setNombreTipoUsuario(newNombreTipoUsuario);

    // Almacena los valores en el almacenamiento local
    localStorage.setItem("tipoUsuario", newTipoUsuario);
    localStorage.setItem("nombreTipoUsuario", newNombreTipoUsuario);
  };

  return (
    <UserContext.Provider
      value={{
        tipoUsuario,
        nombreTipoUsuario,
        idUsuario,
        updateUserContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
