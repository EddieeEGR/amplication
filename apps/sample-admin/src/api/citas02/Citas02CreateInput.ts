import { MedicoWhereUniqueInput } from "../medico/MedicoWhereUniqueInput";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type Citas02CreateInput = {
  estado?: "Option1" | null;
  fechaHora?: Date | null;
  medico?: MedicoWhereUniqueInput | null;
  paciente?: PacienteWhereUniqueInput | null;
  tipo?: "Option1" | null;
};
