import { CitaCreateNestedManyWithoutPacientesInput } from "./CitaCreateNestedManyWithoutPacientesInput";
import { Citas02CreateNestedManyWithoutPacientesInput } from "./Citas02CreateNestedManyWithoutPacientesInput";
import { RecetaCreateNestedManyWithoutPacientesInput } from "./RecetaCreateNestedManyWithoutPacientesInput";

export type PacienteCreateInput = {
  antecedentes?: string | null;
  citas?: CitaCreateNestedManyWithoutPacientesInput;
  citas02s?: Citas02CreateNestedManyWithoutPacientesInput;
  contacto?: string | null;
  datosDemograficos?: string | null;
  recetas?: RecetaCreateNestedManyWithoutPacientesInput;
};
