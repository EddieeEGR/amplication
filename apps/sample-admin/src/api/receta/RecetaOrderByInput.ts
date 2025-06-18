import { SortOrder } from "../../util/SortOrder";

export type RecetaOrderByInput = {
  createdAt?: SortOrder;
  fecha?: SortOrder;
  id?: SortOrder;
  medicamento?: SortOrder;
  medicoId?: SortOrder;
  pacienteId?: SortOrder;
  updatedAt?: SortOrder;
};
