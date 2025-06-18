import { CitaUpdateManyWithoutPacientesInput } from "./CitaUpdateManyWithoutPacientesInput";
import { Citas02UpdateManyWithoutPacientesInput } from "./Citas02UpdateManyWithoutPacientesInput";
import { RecetaUpdateManyWithoutPacientesInput } from "./RecetaUpdateManyWithoutPacientesInput";

export type PacienteUpdateInput = {
  antecedentes?: string | null;
  citas?: CitaUpdateManyWithoutPacientesInput;
  citas02s?: Citas02UpdateManyWithoutPacientesInput;
  contacto?: string | null;
  datosDemograficos?: string | null;
  recetas?: RecetaUpdateManyWithoutPacientesInput;
};
