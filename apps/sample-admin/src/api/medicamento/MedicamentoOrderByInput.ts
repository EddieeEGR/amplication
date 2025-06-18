import { SortOrder } from "../../util/SortOrder";

export type MedicamentoOrderByInput = {
  createdAt?: SortOrder;
  dosis?: SortOrder;
  id?: SortOrder;
  nombre?: SortOrder;
  updatedAt?: SortOrder;
};
