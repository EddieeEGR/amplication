import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicoWhereUniqueInput } from "../medico/MedicoWhereUniqueInput";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type Citas02WhereInput = {
  estado?: "Option1";
  fechaHora?: DateTimeNullableFilter;
  id?: StringFilter;
  medico?: MedicoWhereUniqueInput;
  paciente?: PacienteWhereUniqueInput;
  tipo?: "Option1";
};
