import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmpresaService } from "./empresa.service";
import { EmpresaControllerBase } from "./base/empresa.controller.base";

@swagger.ApiTags("empresas")
@common.Controller("empresas")
export class EmpresaController extends EmpresaControllerBase {
  constructor(protected readonly service: EmpresaService) {
    super(service);
  }
}
