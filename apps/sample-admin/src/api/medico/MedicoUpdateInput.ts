import { CitaUpdateManyWithoutMedicosInput } from "./CitaUpdateManyWithoutMedicosInput";
import { Citas02UpdateManyWithoutMedicosInput } from "./Citas02UpdateManyWithoutMedicosInput";
import { RecetaUpdateManyWithoutMedicosInput } from "./RecetaUpdateManyWithoutMedicosInput";

export type MedicoUpdateInput = {
  cedula?: string | null;
  citas?: CitaUpdateManyWithoutMedicosInput;
  citas02s?: Citas02UpdateManyWithoutMedicosInput;
  especialidad?: string | null;
  horarios?: string | null;
  perfil?: string | null;
  recetas?: RecetaUpdateManyWithoutMedicosInput;
};
