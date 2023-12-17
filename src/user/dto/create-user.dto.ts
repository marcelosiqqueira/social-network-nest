import { IsDate, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsStrongPassword({
    minLength: 6, 
  })
  password: string;

  @IsDate()
  birthday: Date;
} 