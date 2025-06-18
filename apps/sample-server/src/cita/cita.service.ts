import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CitaServiceBase } from "./base/cita.service.base";

@Injectable()
export class CitaService extends CitaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
