import { SortOrder } from "../../util/SortOrder";

export type MedicoOrderByInput = {
  cedula?: SortOrder;
  createdAt?: SortOrder;
  especialidad?: SortOrder;
  horarios?: SortOrder;
  id?: SortOrder;
  perfil?: SortOrder;
  updatedAt?: SortOrder;
};
