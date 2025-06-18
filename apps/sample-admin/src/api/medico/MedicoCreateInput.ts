import { CitaCreateNestedManyWithoutMedicosInput } from "./CitaCreateNestedManyWithoutMedicosInput";
import { Citas02CreateNestedManyWithoutMedicosInput } from "./Citas02CreateNestedManyWithoutMedicosInput";
import { RecetaCreateNestedManyWithoutMedicosInput } from "./RecetaCreateNestedManyWithoutMedicosInput";

export type MedicoCreateInput = {
  cedula?: string | null;
  citas?: CitaCreateNestedManyWithoutMedicosInput;
  citas02s?: Citas02CreateNestedManyWithoutMedicosInput;
  especialidad?: string | null;
  horarios?: string | null;
  perfil?: string | null;
  recetas?: RecetaCreateNestedManyWithoutMedicosInput;
};
