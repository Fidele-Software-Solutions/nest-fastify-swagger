import { Injectable, Inject, Res, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { RequestResponseDto } from 'src/authentication/types/request-response-dto/request-response-dto';

@Injectable({ scope: Scope.REQUEST })
export class AuthUtilsService {

    // constructor(@Inject(REQUEST) private readonly request: Request) {}

    makeResponse<T>(message: string, data?: T, status = true): RequestResponseDto<T> {
        return {
            status,
            message,
            data
        };
    }
}
