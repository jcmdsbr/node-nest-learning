import { IsEmail, IsNotEmpty, Length, Min } from 'class-validator';

export class CreateCustomerDto {
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

  @IsNotEmpty()
  @Length(11)
  document: string;
}
