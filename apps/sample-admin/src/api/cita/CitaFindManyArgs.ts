import { CitaWhereInput } from "./CitaWhereInput";
import { CitaOrderByInput } from "./CitaOrderByInput";

export type CitaFindManyArgs = {
  where?: CitaWhereInput;
  orderBy?: Array<CitaOrderByInput>;
  skip?: number;
  take?: number;
};
