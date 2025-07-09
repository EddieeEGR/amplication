import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsuarioService } from "./usuario.service";
import { UsuarioControllerBase } from "./base/usuario.controller.base";

@swagger.ApiTags("usuarios")
@common.Controller("usuarios")
export class UsuarioController extends UsuarioControllerBase {
  constructor(protected readonly service: UsuarioService) {
    super(service);
  }
}
