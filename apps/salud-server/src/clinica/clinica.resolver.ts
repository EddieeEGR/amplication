import * as graphql from "@nestjs/graphql";
import { ClinicaResolverBase } from "./base/clinica.resolver.base";
import { Clinica } from "./base/Clinica";
import { ClinicaService } from "./clinica.service";

@graphql.Resolver(() => Clinica)
export class ClinicaResolver extends ClinicaResolverBase {
  constructor(protected readonly service: ClinicaService) {
    super(service);
  }
}
