import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('api/v1/customers')
export class CustomerController {
  @Get()
  async get() {
    return 'Obter clientes';
  }

  @Get(':document')
  async getById(@Param('document') document: string) {
    return `Obter cliente ${document}`;
  }

  @Post()
  async post(@Body() body: any) {
    return body;
  }

  @Put(':document')
  async put(@Param('document') document: string, @Body() body: any) {
    return body;
  }

  @Delete(':document')
  async delete(@Param('document') document: string) {
    return `Deletar cliente ${document}`;
  }
}
