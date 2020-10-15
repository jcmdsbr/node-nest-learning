import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer } from 'src/backoffice/models/customer.model';
import { Response } from 'src/core/models/response.model';

@Controller('api/v1/customers')
export class CustomerController {
  @Get()
  async get(): Promise<Response> {
    return new Response();
  }

  @Get(':document')
  async getById(@Param('document') document: string): Promise<Response> {
    return new Response();
  }

  @Post()
  async post(@Body() body: Customer): Promise<Response> {
    return new Response(body);
  }

  @Put(':document')
  async put(
    @Param('document') document: string,
    @Body() body: Customer,
  ): Promise<Response> {
    return new Response(body);
  }

  @Delete(':document')
  async delete(@Param('document') document: string): Promise<Response> {
    return new Response();
  }
}
