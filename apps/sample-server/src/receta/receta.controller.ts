import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecetaService } from "./receta.service";
import { RecetaControllerBase } from "./base/receta.controller.base";

@swagger.ApiTags("recetas")
@common.Controller("recetas")
export class RecetaController extends RecetaControllerBase {
  constructor(
    protected readonly service: RecetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
