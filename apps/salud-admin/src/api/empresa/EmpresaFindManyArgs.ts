import { EmpresaWhereInput } from "./EmpresaWhereInput";
import { EmpresaOrderByInput } from "./EmpresaOrderByInput";

export type EmpresaFindManyArgs = {
  where?: EmpresaWhereInput;
  orderBy?: Array<EmpresaOrderByInput>;
  skip?: number;
  take?: number;
};
