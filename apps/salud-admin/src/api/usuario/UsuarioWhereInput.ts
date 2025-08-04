import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UsuarioWhereInput = {
  apellidoMaterno?: StringNullableFilter;
  apellidoPaterno?: StringNullableFilter;
  correo?: StringFilter;
  creadoEn?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  estatus?: BooleanNullableFilter;
  id?: StringFilter;
  idUsuario?: StringFilter;
  nombre?: StringFilter;
  rol?: StringNullableFilter;
};
