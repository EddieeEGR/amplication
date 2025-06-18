import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicoWhereUniqueInput } from "../medico/MedicoWhereUniqueInput";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type RecetaWhereInput = {
  fecha?: StringNullableFilter;
  id?: StringFilter;
  medicamento?: StringNullableFilter;
  medico?: MedicoWhereUniqueInput;
  paciente?: PacienteWhereUniqueInput;
};
