import { SchemaFactory } from '@nestjs/mongoose';
import { Customer } from '../../models/customer.model';

export const CustomerSchema = SchemaFactory.createForClass(Customer);
