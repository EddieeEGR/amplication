import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmpresaServiceBase } from "./base/empresa.service.base";

@Injectable()
export class EmpresaService extends EmpresaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
