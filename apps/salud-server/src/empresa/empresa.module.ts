import { Module } from "@nestjs/common";
import { EmpresaModuleBase } from "./base/empresa.module.base";
import { EmpresaService } from "./empresa.service";
import { EmpresaController } from "./empresa.controller";
import { EmpresaResolver } from "./empresa.resolver";

@Module({
  imports: [EmpresaModuleBase],
  controllers: [EmpresaController],
  providers: [EmpresaService, EmpresaResolver],
  exports: [EmpresaService],
})
export class EmpresaModule {}
