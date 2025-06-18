import { Paciente as TPaciente } from "../api/paciente/Paciente";

export const PACIENTE_TITLE_FIELD = "antecedentes";

export const PacienteTitle = (record: TPaciente): string => {
  return record.antecedentes?.toString() || String(record.id);
};
