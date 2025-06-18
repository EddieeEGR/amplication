import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicoWhereUniqueInput } from "../medico/MedicoWhereUniqueInput";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type CitaWhereInput = {
  estado?: StringNullableFilter;
  fecha?: StringNullableFilter;
  id?: StringFilter;
  medico?: MedicoWhereUniqueInput;
  paciente?: PacienteWhereUniqueInput;
  tipo?: StringNullableFilter;
};
