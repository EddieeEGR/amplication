import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Citas02Service } from "./citas02.service";
import { Citas02ControllerBase } from "./base/citas02.controller.base";

@swagger.ApiTags("citas02s")
@common.Controller("citas02s")
export class Citas02Controller extends Citas02ControllerBase {
  constructor(
    protected readonly service: Citas02Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
