import { MedicamentoWhereInput } from "./MedicamentoWhereInput";
import { MedicamentoOrderByInput } from "./MedicamentoOrderByInput";

export type MedicamentoFindManyArgs = {
  where?: MedicamentoWhereInput;
  orderBy?: Array<MedicamentoOrderByInput>;
  skip?: number;
  take?: number;
};
