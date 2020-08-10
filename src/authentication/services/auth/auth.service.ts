import { SignupDto } from './../../types/signup-dto/signup.dto';
import { response } from 'express';
import { AuthUtilsService } from './../auth-utils/auth-utils.service';
import { Injectable, HttpStatus } from '@nestjs/common';
import { LoginDto } from 'src/authentication/types/login-dto/login.dto';
import { IAuthorization } from 'src/authentication/types/iauthorization/iauthorization';
import { ResetPasswordRequestDto } from 'src/authentication/types/reset-password-request-dto/reset-password-request.dto';

@Injectable()
export class AuthService {

    constructor(private util: AuthUtilsService) {}

    login(payload: LoginDto, response: any){

        response.status(HttpStatus.OK);
        return response.send(this.util.makeResponse<IAuthorization>("Login successful", {authorization: "Ikenna"}));
    }

    signup(payload: SignupDto, response: any) {

        response.status(HttpStatus.OK);
        return this.util.makeResponse<{name: string}>("Your signup completed successfully", {name: "Ikenna"});
    }

    requestPasswordReset(payload: ResetPasswordRequestDto, response: any) {
        
        response.status(HttpStatus.OK);
        return this.util.makeResponse<{name: string}>("Your password reset request completed successfully. Check your email to continue", {name: "Ikenna"});
    }

}
