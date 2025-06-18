import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicoService } from "./medico.service";
import { MedicoControllerBase } from "./base/medico.controller.base";

@swagger.ApiTags("medicos")
@common.Controller("medicos")
export class MedicoController extends MedicoControllerBase {
  constructor(
    protected readonly service: MedicoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
