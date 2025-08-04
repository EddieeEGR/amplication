import { ClinicaWhereInput } from "./ClinicaWhereInput";
import { ClinicaOrderByInput } from "./ClinicaOrderByInput";

export type ClinicaFindManyArgs = {
  where?: ClinicaWhereInput;
  orderBy?: Array<ClinicaOrderByInput>;
  skip?: number;
  take?: number;
};
