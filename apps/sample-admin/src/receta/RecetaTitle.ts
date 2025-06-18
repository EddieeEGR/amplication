import { Receta as TReceta } from "../api/receta/Receta";

export const RECETA_TITLE_FIELD = "fecha";

export const RecetaTitle = (record: TReceta): string => {
  return record.fecha?.toString() || String(record.id);
};
