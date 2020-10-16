import { Prop, Schema } from '@nestjs/mongoose';
import { Type } from 'class-transformer/decorators';
import * as mongoose from 'mongoose';
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
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
  constructor(
    document: string,
    pets: Pet[],
    user: User,
    billingAddress?: Address,
    creditCard?: CreditCard,
    shippingAddress?: Address,
  ) {
    super();
    this.document = document;
    this.pets = pets;
    this.billingAddress = billingAddress;
    this.shippingAddress = shippingAddress || billingAddress;
    this.creditCard = creditCard;
    this.user = user;
  }
  @Prop({ required: true, trim: true, index: { unique: true } })
  @IsNotEmpty()
  @Length(11)
  document: string;

  @Prop()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => Pet)
  pets: Pet[];

  @Prop()
  @ValidateNested()
  @Type(() => Address)
  billingAddress: Address;

  @Prop()
  @ValidateNested()
  @Type(() => Address)
  shippingAddress: Address;

  @Prop()
  @ValidateNested()
  @Type(() => Address)
  creditCard: CreditCard;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => User)
  user: User;
}
