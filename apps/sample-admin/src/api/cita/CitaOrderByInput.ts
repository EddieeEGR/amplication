import { SortOrder } from "../../util/SortOrder";

export type CitaOrderByInput = {
  createdAt?: SortOrder;
  estado?: SortOrder;
  fecha?: SortOrder;
  id?: SortOrder;
  medicoId?: SortOrder;
  pacienteId?: SortOrder;
  tipo?: SortOrder;
  updatedAt?: SortOrder;
};
