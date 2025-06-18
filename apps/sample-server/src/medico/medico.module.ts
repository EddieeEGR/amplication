import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicoModuleBase } from "./base/medico.module.base";
import { MedicoService } from "./medico.service";
import { MedicoController } from "./medico.controller";
import { MedicoResolver } from "./medico.resolver";

@Module({
  imports: [MedicoModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicoController],
  providers: [MedicoService, MedicoResolver],
  exports: [MedicoService],
})
export class MedicoModule {}
