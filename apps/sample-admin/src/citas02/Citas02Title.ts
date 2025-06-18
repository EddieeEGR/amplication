import { Citas02 as TCitas02 } from "../api/citas02/Citas02";

export const CITAS02_TITLE_FIELD = "id";

export const Citas02Title = (record: TCitas02): string => {
  return record.id?.toString() || String(record.id);
};
