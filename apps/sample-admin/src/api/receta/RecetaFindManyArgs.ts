import { RecetaWhereInput } from "./RecetaWhereInput";
import { RecetaOrderByInput } from "./RecetaOrderByInput";

export type RecetaFindManyArgs = {
  where?: RecetaWhereInput;
  orderBy?: Array<RecetaOrderByInput>;
  skip?: number;
  take?: number;
};
