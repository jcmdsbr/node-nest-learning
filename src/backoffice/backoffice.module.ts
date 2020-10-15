import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/v1/customer.controller';

@Module({
  controllers: [CustomerController],
})
export class BackofficeModule {}
