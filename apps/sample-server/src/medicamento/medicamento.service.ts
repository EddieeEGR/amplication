import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicamentoServiceBase } from "./base/medicamento.service.base";

@Injectable()
export class MedicamentoService extends MedicamentoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
