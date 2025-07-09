import * as graphql from "@nestjs/graphql";
import { UsuarioResolverBase } from "./base/usuario.resolver.base";
import { Usuario } from "./base/Usuario";
import { UsuarioService } from "./usuario.service";

@graphql.Resolver(() => Usuario)
export class UsuarioResolver extends UsuarioResolverBase {
  constructor(protected readonly service: UsuarioService) {
    super(service);
  }
}
