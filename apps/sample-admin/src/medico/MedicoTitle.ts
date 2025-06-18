import { Medico as TMedico } from "../api/medico/Medico";

export const MEDICO_TITLE_FIELD = "cedula";

export const MedicoTitle = (record: TMedico): string => {
  return record.cedula?.toString() || String(record.id);
};
