import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import { Pet } from './pet.model';

export class Customer {
  constructor(
    public name: string,
    public document: string,
    public pets: Pet[],
    public billingAddress: Address,
    public shippingAddress: Address,
    public creditCard: CreditCard,
    public email: string,
    public password: string,
    public active: boolean,
  ) {}
}
