import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class User {
  constructor(
    name: string,
    password: string,
    email: string,
    public active: boolean = true,
  ) {
    this.name = name;
    this.password = password;
    this.email = email;
  }

  @IsNotEmpty()
  @Min(5)
  name: string;

  @IsNotEmpty()
  @Min(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
