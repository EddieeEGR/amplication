import { ClinicaUpdateManyWithoutEmpresasInput } from "./ClinicaUpdateManyWithoutEmpresasInput";

export type EmpresaUpdateInput = {
  clinicas?: ClinicaUpdateManyWithoutEmpresasInput;
  direccion?: string | null;
  nombreComercial?: string | null;
  razonSocial?: string | null;
  rfc?: string | null;
  telefono?: string | null;
};
