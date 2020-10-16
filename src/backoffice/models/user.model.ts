import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  constructor(
    name: string,
    password: string,
    email: string,
    public active: boolean = true,
  ) {
    super();
    this.name = name;
    this.password = password;
    this.email = email;
  }

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  password: string;

  @Prop({ required: true, trim: true })
  email: string;
}
