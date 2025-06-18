import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Citas02ServiceBase } from "./base/citas02.service.base";

@Injectable()
export class Citas02Service extends Citas02ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
