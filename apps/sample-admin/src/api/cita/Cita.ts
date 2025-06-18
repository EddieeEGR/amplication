import { Medico } from "../medico/Medico";
import { Paciente } from "../paciente/Paciente";

export type Cita = {
  createdAt: Date;
  estado: string | null;
  fecha: string | null;
  id: string;
  medico?: Medico | null;
  paciente?: Paciente | null;
  tipo: string | null;
  updatedAt: Date;
};
