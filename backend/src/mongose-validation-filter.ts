/* eslint-disable prettier/prettier */
// create a new file: mongoose-validation.filter.ts

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
//   import { ValidationError } from 'mongoose';

@Catch(BadRequestException)
export class MongooseValidationFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.BAD_REQUEST;

    const exceptionResponse = exception.getResponse();
    const message =
      exceptionResponse instanceof Object
        ? (exceptionResponse as any).message || exceptionResponse
        : exceptionResponse;

    response.status(status).json({
      statusCode: status,
      error: 'Bad Request',
      message: Array.isArray(message) ? message.join(', ') : message,
    });
  }
}
