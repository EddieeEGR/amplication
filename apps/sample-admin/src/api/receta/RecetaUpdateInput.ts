import { MedicoWhereUniqueInput } from "../medico/MedicoWhereUniqueInput";
import { PacienteWhereUniqueInput } from "../paciente/PacienteWhereUniqueInput";

export type RecetaUpdateInput = {
  fecha?: string | null;
  medicamento?: string | null;
  medico?: MedicoWhereUniqueInput | null;
  paciente?: PacienteWhereUniqueInput | null;
};
