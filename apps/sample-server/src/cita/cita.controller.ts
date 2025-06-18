import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CitaService } from "./cita.service";
import { CitaControllerBase } from "./base/cita.controller.base";

@swagger.ApiTags("citas")
@common.Controller("citas")
export class CitaController extends CitaControllerBase {
  constructor(
    protected readonly service: CitaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
