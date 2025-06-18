import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicoServiceBase } from "./base/medico.service.base";

@Injectable()
export class MedicoService extends MedicoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
