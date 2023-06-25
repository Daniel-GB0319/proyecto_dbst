import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [nombreTipoUsuario, setNombreTipoUsuario] = useState("");

  const updateUserContext = (newTipoUsuario, newNombreTipoUsuario) => {
    setTipoUsuario(newTipoUsuario);
    setNombreTipoUsuario(newNombreTipoUsuario);
  };

  return (
    <UserContext.Provider
      value={{
        tipoUsuario,
        nombreTipoUsuario,
        updateUserContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
