import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CitaModuleBase } from "./base/cita.module.base";
import { CitaService } from "./cita.service";
import { CitaController } from "./cita.controller";
import { CitaResolver } from "./cita.resolver";

@Module({
  imports: [CitaModuleBase, forwardRef(() => AuthModule)],
  controllers: [CitaController],
  providers: [CitaService, CitaResolver],
  exports: [CitaService],
})
export class CitaModule {}
