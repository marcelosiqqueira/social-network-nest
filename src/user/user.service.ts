import { CreateUserDTO } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  async create( {email, name, password, birthday }: CreateUserDTO) {
     return this.prisma.user.create({
      data: {
        email,
        name,
        password,
        birthday: new Date(birthday)
      },
    })
  }
}