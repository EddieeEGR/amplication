import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecetaModuleBase } from "./base/receta.module.base";
import { RecetaService } from "./receta.service";
import { RecetaController } from "./receta.controller";
import { RecetaResolver } from "./receta.resolver";

@Module({
  imports: [RecetaModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecetaController],
  providers: [RecetaService, RecetaResolver],
  exports: [RecetaService],
})
export class RecetaModule {}
