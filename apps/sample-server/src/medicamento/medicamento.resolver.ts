import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MedicamentoResolverBase } from "./base/medicamento.resolver.base";
import { Medicamento } from "./base/Medicamento";
import { MedicamentoService } from "./medicamento.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Medicamento)
export class MedicamentoResolver extends MedicamentoResolverBase {
  constructor(
    protected readonly service: MedicamentoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
