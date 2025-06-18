import { MedicoWhereInput } from "./MedicoWhereInput";
import { MedicoOrderByInput } from "./MedicoOrderByInput";

export type MedicoFindManyArgs = {
  where?: MedicoWhereInput;
  orderBy?: Array<MedicoOrderByInput>;
  skip?: number;
  take?: number;
};
