import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmpresaWhereInput = {
  direccion?: StringNullableFilter;
  id?: StringFilter;
  nombreComercial?: StringNullableFilter;
  razonSocial?: StringNullableFilter;
  rfc?: StringNullableFilter;
  telefono?: StringNullableFilter;
};
