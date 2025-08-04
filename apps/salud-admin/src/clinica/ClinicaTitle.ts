import { Clinica as TClinica } from "../api/clinica/Clinica";

export const CLINICA_TITLE_FIELD = "activa";

export const ClinicaTitle = (record: TClinica): string => {
  return record.activa?.toString() || String(record.id);
};
