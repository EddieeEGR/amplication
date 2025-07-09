import { Paciente as TPaciente } from "../api/paciente/Paciente";

export const PACIENTE_TITLE_FIELD = "idUsuario";

export const PacienteTitle = (record: TPaciente): string => {
  return record.idUsuario?.toString() || String(record.id);
};
