import { Module } from "@nestjs/common";
import { UsuarioModuleBase } from "./base/usuario.module.base";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { UsuarioResolver } from "./usuario.resolver";

@Module({
  imports: [UsuarioModuleBase],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioResolver],
  exports: [UsuarioService],
})
export class UsuarioModule {}
