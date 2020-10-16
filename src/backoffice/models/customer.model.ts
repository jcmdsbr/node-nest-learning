import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

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
  document: string;

  @Prop()
  pets: Pet[];

  @Prop()
  billingAddress: Address;

  @Prop()
  shippingAddress: Address;

  @Prop()
  creditCard: CreditCard;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
