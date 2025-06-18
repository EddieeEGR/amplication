import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { Citas02ModuleBase } from "./base/citas02.module.base";
import { Citas02Service } from "./citas02.service";
import { Citas02Controller } from "./citas02.controller";
import { Citas02Resolver } from "./citas02.resolver";

@Module({
  imports: [Citas02ModuleBase, forwardRef(() => AuthModule)],
  controllers: [Citas02Controller],
  providers: [Citas02Service, Citas02Resolver],
  exports: [Citas02Service],
})
export class Citas02Module {}
