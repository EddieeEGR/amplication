import { Cita } from "../cita/Cita";
import { Citas02 } from "../citas02/Citas02";
import { Receta } from "../receta/Receta";

export type Medico = {
  cedula: string | null;
  citas?: Array<Cita>;
  citas02s?: Array<Citas02>;
  createdAt: Date;
  especialidad: string | null;
  horarios: string | null;
  id: string;
  perfil: string | null;
  recetas?: Array<Receta>;
  updatedAt: Date;
};
