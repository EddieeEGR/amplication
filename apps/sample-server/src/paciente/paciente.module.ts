import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PacienteModuleBase } from "./base/paciente.module.base";
import { PacienteService } from "./paciente.service";
import { PacienteController } from "./paciente.controller";
import { PacienteResolver } from "./paciente.resolver";

@Module({
  imports: [PacienteModuleBase, forwardRef(() => AuthModule)],
  controllers: [PacienteController],
  providers: [PacienteService, PacienteResolver],
  exports: [PacienteService],
})
export class PacienteModule {}
