import { Medicamento as TMedicamento } from "../api/medicamento/Medicamento";

export const MEDICAMENTO_TITLE_FIELD = "dosis";

export const MedicamentoTitle = (record: TMedicamento): string => {
  return record.dosis?.toString() || String(record.id);
};
