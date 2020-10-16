import { IsNotEmpty } from 'class-validator';

export class Address {
  constructor(
    zipCode: string,
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    country: string,
  ) {
    this.zipCode = zipCode;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  @IsNotEmpty()
  zipCode: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  country: string;

  complement: string;
}
