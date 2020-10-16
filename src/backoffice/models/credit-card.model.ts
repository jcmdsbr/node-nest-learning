export class CreditCard {
  constructor(holder: string, number: string, expiration: string) {
    this.holder = holder;
    this.number = number;
    this.expiration = expiration;
  }

  holder: string;
  number: string;
  expiration: string;
}
