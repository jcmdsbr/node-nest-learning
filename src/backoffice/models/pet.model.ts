import { IsNotEmpty } from 'class-validator';

export class Pet {
  constructor(name: string, gender: string, kind: string, brand: string) {
    this.name = name;
    this.gender = gender;
    this.kind = kind;
    this.brand = brand;
  }

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  kind: string;

  @IsNotEmpty()
  brand: string;
}
