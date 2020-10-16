import { Type } from 'class-transformer/decorators';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  Length,
  ValidateNested,
} from 'class-validator';

import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import { Pet } from './pet.model';
import { User } from './user.model';

export class Customer {
  constructor(
    document: string,
    pets: Pet[],
    billingAddress: Address,
    shippingAddress: Address,
    creditCard: CreditCard,
    user: User,
  ) {
    this.document = document;
    this.pets = pets;
    this.billingAddress = billingAddress;
    this.shippingAddress = shippingAddress;
    this.creditCard = creditCard;
    this.user = user;
  }

  @IsNotEmpty()
  @Length(11)
  document: string;

  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => Pet)
  pets: Pet[];

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Address)
  billingAddress: Address;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Address)
  shippingAddress: Address;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Address)
  creditCard: CreditCard;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => User)
  user: User;
}
