import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './controllers/v1/customer.controller';
import { CustomerSchema } from './infraestructure/schemas/customer.schema';
import { UserSchema } from './infraestructure/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Customer',
        schema: CustomerSchema,
      },
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [CustomerController],
})
export class BackofficeModule {}
