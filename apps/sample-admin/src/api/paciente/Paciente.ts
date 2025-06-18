import { Cita } from "../cita/Cita";
import { Citas02 } from "../citas02/Citas02";
import { Receta } from "../receta/Receta";

export type Paciente = {
  antecedentes: string | null;
  citas?: Array<Cita>;
  citas02s?: Array<Citas02>;
  contacto: string | null;
  createdAt: Date;
  datosDemograficos: string | null;
  id: string;
  recetas?: Array<Receta>;
  updatedAt: Date;
};
