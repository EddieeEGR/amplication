import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClinicaService } from "./clinica.service";
import { ClinicaControllerBase } from "./base/clinica.controller.base";

@swagger.ApiTags("clinicas")
@common.Controller("clinicas")
export class ClinicaController extends ClinicaControllerBase {
  constructor(protected readonly service: ClinicaService) {
    super(service);
  }
}
