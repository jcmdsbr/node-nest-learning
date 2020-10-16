import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/backoffice/dtos/create-customer.dto';
import { DeleteCustomerDto } from 'src/backoffice/dtos/delete-customer.dto';
import { GetCustomerDto } from 'src/backoffice/dtos/get-customer.dto';
import { UpdateCustomerDto } from 'src/backoffice/dtos/update-customer.dto';
import { BaseController } from 'src/core/controllers/base.controller';
import { Response } from 'src/core/models/response.model';

@Controller('api/v1/customers')
export class CustomerController extends BaseController {
  @Get()
  async get(): Promise<Response> {
    return new Response();
  }

  @Get(':document')
  async getById(@Param('document') document: string): Promise<Response> {
    return await this.safeExecuteAsync(new GetCustomerDto(document));
  }

  @Post()
  async post(@Body() createCustomerDto: CreateCustomerDto): Promise<Response> {
    return await this.safeExecuteAsync(createCustomerDto);
  }

  @Put(':document')
  async put(
    @Param('document') document: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Response> {
    updateCustomerDto.document = document;
    return await this.safeExecuteAsync(updateCustomerDto);
  }

  @Delete(':document')
  async delete(@Param('document') document: string): Promise<Response> {
    return await this.safeExecuteAsync(new DeleteCustomerDto(document));
  }
}
