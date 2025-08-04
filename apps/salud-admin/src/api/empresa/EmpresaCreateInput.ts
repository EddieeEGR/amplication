import { ClinicaCreateNestedManyWithoutEmpresasInput } from "./ClinicaCreateNestedManyWithoutEmpresasInput";

export type EmpresaCreateInput = {
  clinicas?: ClinicaCreateNestedManyWithoutEmpresasInput;
  direccion?: string | null;
  nombreComercial?: string | null;
  razonSocial?: string | null;
  rfc?: string | null;
  telefono?: string | null;
};
