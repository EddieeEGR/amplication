import { Medico } from "../medico/Medico";
import { Paciente } from "../paciente/Paciente";

export type Citas02 = {
  createdAt: Date;
  estado?: "Option1" | null;
  fechaHora: Date | null;
  id: string;
  medico?: Medico | null;
  paciente?: Paciente | null;
  tipo?: "Option1" | null;
  updatedAt: Date;
};
