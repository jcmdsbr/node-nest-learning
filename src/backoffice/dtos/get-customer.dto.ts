import { Expose } from 'class-transformer';

export class GetCustomerDto {
  constructor(public document: string) {}
}
