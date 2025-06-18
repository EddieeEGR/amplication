import { Cita as TCita } from "../api/cita/Cita";

export const CITA_TITLE_FIELD = "estado";

export const CitaTitle = (record: TCita): string => {
  return record.estado?.toString() || String(record.id);
};
