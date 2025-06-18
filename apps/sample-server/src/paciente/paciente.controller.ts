import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PacienteService } from "./paciente.service";
import { PacienteControllerBase } from "./base/paciente.controller.base";

@swagger.ApiTags("pacientes")
@common.Controller("pacientes")
export class PacienteController extends PacienteControllerBase {
  constructor(
    protected readonly service: PacienteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
