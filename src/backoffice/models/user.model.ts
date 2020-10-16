import { Prop, Schema } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, Min } from 'class-validator';
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
  @IsNotEmpty()
  @Min(5)
  name: string;

  @Prop({ required: true, trim: true })
  @IsNotEmpty()
  @Min(8)
  password: string;

  @Prop({ required: true, trim: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
