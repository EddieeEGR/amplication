import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecetaServiceBase } from "./base/receta.service.base";

@Injectable()
export class RecetaService extends RecetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
