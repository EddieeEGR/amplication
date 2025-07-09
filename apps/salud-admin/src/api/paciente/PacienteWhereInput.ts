import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PacienteWhereInput = {
  id?: StringFilter;
  idUsuario?: StringFilter;
  pacientes?: StringNullableFilter;
};
