import { Get, Param } from "@nestjs/common";
import { Body, Controller, Patch, Post, Put } from "@nestjs/common/decorators";
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from "./dto/update-user.dto";
import { UserService } from "./user.service";


@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() {email, name, password, birthday}: CreateUserDTO) {
    return this.userService.create( {email, name, password, birthday} );
  }

  @Get()
  async list() {
    return {users: {}}
  }

  @Get(':id')
  async show(@Param() params) {
    return {user: {}, params}
  }

  @Patch(':id')
  async update(@Body() {email, name, password, birthday}: UpdatePatchUserDTO, @Param() params) {
    return {email, name, password, birthday, params};
  }
}