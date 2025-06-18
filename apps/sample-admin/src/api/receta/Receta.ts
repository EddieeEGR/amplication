import { Medico } from "../medico/Medico";
import { Paciente } from "../paciente/Paciente";

export type Receta = {
  createdAt: Date;
  fecha: string | null;
  id: string;
  medicamento: string | null;
  medico?: Medico | null;
  paciente?: Paciente | null;
  updatedAt: Date;
};
