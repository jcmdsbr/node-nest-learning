import { IsNotEmpty } from 'class-validator';

export class CreditCard {
  constructor(holder: string, number: string, expiration: string) {
    this.holder = holder;
    this.number = number;
    this.expiration = expiration;
  }

  @IsNotEmpty()
  holder: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  expiration: string;
}
