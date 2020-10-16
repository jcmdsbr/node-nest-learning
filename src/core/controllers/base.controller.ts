import { InternalServerErrorException } from '@nestjs/common';
import { Response } from '../models/response.model';

export class BaseController {
  async safeExecuteAsync(req?: any): Promise<Response> {
    try {
      return new Response(req);
    } catch (error) {
      throw new InternalServerErrorException(
        new Response(null, [
          'The system is unavailable, contact your administrator',
        ]),
      );
    }
  }
}
