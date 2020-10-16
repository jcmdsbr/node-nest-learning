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
    return await this.safeExecuteAsync({ document });
  }

  @Post()
  async post(@Body() body: Customer): Promise<Response> {
    return await this.safeExecuteAsync(body);
  }

  @Put(':document')
  async put(
    @Param('document') document: string,
    @Body() body: Customer,
  ): Promise<Response> {
    body.document = document;
    return await this.safeExecuteAsync(body);
  }

  @Delete(':document')
  async delete(@Param('document') document: string): Promise<Response> {
    return await this.safeExecuteAsync({ document });
  }
}
