import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MedicamentoWhereInput = {
  dosis?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
};
