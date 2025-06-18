import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicamentoModuleBase } from "./base/medicamento.module.base";
import { MedicamentoService } from "./medicamento.service";
import { MedicamentoController } from "./medicamento.controller";
import { MedicamentoResolver } from "./medicamento.resolver";

@Module({
  imports: [MedicamentoModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicamentoController],
  providers: [MedicamentoService, MedicamentoResolver],
  exports: [MedicamentoService],
})
export class MedicamentoModule {}
