import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class UpdateCustomerDto {
  constructor(document: string, name: string, password: string, email: string) {
    this.document = document;
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

  document: string;
}
