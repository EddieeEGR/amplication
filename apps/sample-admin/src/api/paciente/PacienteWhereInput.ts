import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CitaListRelationFilter } from "../cita/CitaListRelationFilter";
import { Citas02ListRelationFilter } from "../citas02/Citas02ListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecetaListRelationFilter } from "../receta/RecetaListRelationFilter";

export type PacienteWhereInput = {
  antecedentes?: StringNullableFilter;
  citas?: CitaListRelationFilter;
  citas02s?: Citas02ListRelationFilter;
  contacto?: StringNullableFilter;
  datosDemograficos?: StringNullableFilter;
  id?: StringFilter;
  recetas?: RecetaListRelationFilter;
};
