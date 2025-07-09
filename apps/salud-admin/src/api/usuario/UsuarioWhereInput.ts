import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UsuarioWhereInput = {
  apellidoMaterno?: StringNullableFilter;
  apellidoPaterno?: StringNullableFilter;
  contraseA?: StringNullableFilter;
  correo?: StringNullableFilter;
  creadoEn?: DateTimeNullableFilter;
  estatus?: BooleanNullableFilter;
  id?: StringFilter;
  idUsuario?: StringFilter;
  nombre?: StringNullableFilter;
  rol?: StringNullableFilter;
};
