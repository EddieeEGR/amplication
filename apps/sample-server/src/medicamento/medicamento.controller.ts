import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicamentoService } from "./medicamento.service";
import { MedicamentoControllerBase } from "./base/medicamento.controller.base";

@swagger.ApiTags("medicamentos")
@common.Controller("medicamentos")
export class MedicamentoController extends MedicamentoControllerBase {
  constructor(
    protected readonly service: MedicamentoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
