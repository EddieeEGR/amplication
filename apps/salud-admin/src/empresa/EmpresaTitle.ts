import { Empresa as TEmpresa } from "../api/empresa/Empresa";

export const EMPRESA_TITLE_FIELD = "direccion";

export const EmpresaTitle = (record: TEmpresa): string => {
  return record.direccion?.toString() || String(record.id);
};
