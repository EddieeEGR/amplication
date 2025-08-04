import { Empresa } from "../empresa/Empresa";

export type Clinica = {
  activa: string | null;
  ciudad: string | null;
  cp: string | null;
  createdAt: Date;
  dir: string | null;
  empresa?: Empresa | null;
  estado: string | null;
  id: string;
  nombreComercial: string | null;
  razonSocial: string | null;
  tel: string | null;
  updatedAt: Date;
};
