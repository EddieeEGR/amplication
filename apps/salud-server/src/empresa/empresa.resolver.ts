import * as graphql from "@nestjs/graphql";
import { EmpresaResolverBase } from "./base/empresa.resolver.base";
import { Empresa } from "./base/Empresa";
import { EmpresaService } from "./empresa.service";

@graphql.Resolver(() => Empresa)
export class EmpresaResolver extends EmpresaResolverBase {
  constructor(protected readonly service: EmpresaService) {
    super(service);
  }
}
