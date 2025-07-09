import { Usuario as TUsuario } from "../api/usuario/Usuario";

export const USUARIO_TITLE_FIELD = "apellidoMaterno";

export const UsuarioTitle = (record: TUsuario): string => {
  return record.apellidoMaterno?.toString() || String(record.id);
};
