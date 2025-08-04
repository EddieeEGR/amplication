import { Clinica } from "../clinica/Clinica";

export type Empresa = {
  clinicas?: Array<Clinica>;
  createdAt: Date;
  direccion: string | null;
  id: string;
  nombreComercial: string | null;
  razonSocial: string | null;
  rfc: string | null;
  telefono: string | null;
  updatedAt: Date;
};
