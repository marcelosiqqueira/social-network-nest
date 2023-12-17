import { CreateUserDTO } from './create-user.dto';
import { IsDate, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class UpdatePatchUserDTO extends CreateUserDTO {
} 