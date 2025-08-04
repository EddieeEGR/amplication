import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClinicaServiceBase } from "./base/clinica.service.base";

@Injectable()
export class ClinicaService extends ClinicaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
