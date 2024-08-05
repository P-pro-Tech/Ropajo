/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { json } from 'body-parser';

@Injectable()
export class JsonBodyLimitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    json({ limit: '50mb' })(req, res, next);
  }
}
