import { EmpresaWhereUniqueInput } from "../empresa/EmpresaWhereUniqueInput";

export type ClinicaUpdateInput = {
  activa?: string | null;
  ciudad?: string | null;
  cp?: string | null;
  dir?: string | null;
  empresa?: EmpresaWhereUniqueInput | null;
  estado?: string | null;
  nombreComercial?: string | null;
  razonSocial?: string | null;
  tel?: string | null;
};
