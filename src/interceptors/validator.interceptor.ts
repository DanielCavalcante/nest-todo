'use strinct'

import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Contract } from 'src/api/contracts/contract';
import { Result } from 'src/api/models/result.model';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {

  constructor(public contract: Contract) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const body = context.switchToHttp().getRequest().body
    const valid = this.contract.validate(body)

    if (!valid)
      throw new HttpException(new Result('Error', false, null, HttpStatus.BAD_REQUEST), HttpStatus.BAD_REQUEST)

    return next.handle()
  }
  
}