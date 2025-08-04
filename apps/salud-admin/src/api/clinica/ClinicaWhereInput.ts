import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmpresaWhereUniqueInput } from "../empresa/EmpresaWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ClinicaWhereInput = {
  activa?: StringNullableFilter;
  ciudad?: StringNullableFilter;
  cp?: StringNullableFilter;
  dir?: StringNullableFilter;
  empresa?: EmpresaWhereUniqueInput;
  estado?: StringNullableFilter;
  id?: StringFilter;
  nombreComercial?: StringNullableFilter;
  razonSocial?: StringNullableFilter;
  tel?: StringNullableFilter;
};
