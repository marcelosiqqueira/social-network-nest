import { Module } from "@nestjs/common/decorators/modules";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";


@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: []
})

export class UserModule {}