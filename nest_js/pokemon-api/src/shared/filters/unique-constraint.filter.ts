import { UniqueConstraintViolationException } from '@mikro-orm/core';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response, Request } from 'express';

@Catch(UniqueConstraintViolationException)
export class UniqueConstraintFilter implements ExceptionFilter {
  catch(ex: UniqueConstraintViolationException, host: ArgumentsHost) {
    // job of this filter is to hijack our response and do something else (not the 500 server error but a bespoke action)
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const { name: errorName, sqlMessage } = ex; // just destructuring the items from exception
    response.status(400).json({
      error: errorName,
      message: sqlMessage,
      statusCode: 400,
      timestamp: Date.now(),
      path: request.url,
    });
  }
}
