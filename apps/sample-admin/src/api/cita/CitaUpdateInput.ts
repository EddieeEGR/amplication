import { MedicoWhereUniqueInput } from "../medico/MedicoWhereUniqueInput";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type CitaUpdateInput = {
  estado?: string | null;
  fecha?: string | null;
  medico?: MedicoWhereUniqueInput | null;
  paciente?: PacienteWhereUniqueInput | null;
  tipo?: string | null;
};
