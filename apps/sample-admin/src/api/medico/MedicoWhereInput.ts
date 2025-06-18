import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CitaListRelationFilter } from "../cita/CitaListRelationFilter";
import { Citas02ListRelationFilter } from "../citas02/Citas02ListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecetaListRelationFilter } from "../receta/RecetaListRelationFilter";

export type MedicoWhereInput = {
  cedula?: StringNullableFilter;
  citas?: CitaListRelationFilter;
  citas02s?: Citas02ListRelationFilter;
  especialidad?: StringNullableFilter;
  horarios?: StringNullableFilter;
  id?: StringFilter;
  perfil?: StringNullableFilter;
  recetas?: RecetaListRelationFilter;
};
