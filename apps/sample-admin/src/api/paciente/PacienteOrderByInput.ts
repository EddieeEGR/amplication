import { SortOrder } from "../../util/SortOrder";

export type PacienteOrderByInput = {
  antecedentes?: SortOrder;
  contacto?: SortOrder;
  createdAt?: SortOrder;
  datosDemograficos?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
