import { Module } from "@nestjs/common";
import { ClinicaModuleBase } from "./base/clinica.module.base";
import { ClinicaService } from "./clinica.service";
import { ClinicaController } from "./clinica.controller";
import { ClinicaResolver } from "./clinica.resolver";

@Module({
  imports: [ClinicaModuleBase],
  controllers: [ClinicaController],
  providers: [ClinicaService, ClinicaResolver],
  exports: [ClinicaService],
})
export class ClinicaModule {}
