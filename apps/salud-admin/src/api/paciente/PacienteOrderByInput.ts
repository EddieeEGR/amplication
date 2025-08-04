import { SortOrder } from "../../util/SortOrder";

export type PacienteOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  idUsuario?: SortOrder;
  pacientes?: SortOrder;
  updatedAt?: SortOrder;
};
