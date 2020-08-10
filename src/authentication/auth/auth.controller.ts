import { ResetPasswordRequestDto } from './../types/reset-password-request-dto/reset-password-request.dto';
import { AuthService } from './../services/auth/auth.service';
import { LoginResponseDto } from '../types/login-response-dto/login-response.dto';
import { LoginDto } from '../types/login-dto/login.dto';
import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { SignupDto } from '../types/signup-dto/signup.dto';
import { SignupResponseDto } from '../types/signup-response-dto/signup-response.dto';
import { RequestResponseDto } from '../types/request-response-dto/request-response-dto';
import { BaseResponseDto } from '../types/base-response-dto/base-response.dto';

@Controller('auth')
export class AuthController {

    constructor(private auth: AuthService) {}

    @Post('login')
    @ApiResponse({
        status: 200,
        description: 'Authorization token required for authorized requests',
        type: LoginResponseDto,
    })
    login(@Body() payload: LoginDto, @Res() res) {
        this.auth.login(payload, res);
    }

    @Post('signup')
    @ApiResponse({
        status: 200,
        description: 'User registration success response',
        type: BaseResponseDto,
    })
    signup(@Body() payload: SignupDto, @Res() res) {
        this.auth.signup(payload, res);
    }

    @Post('reset-password')
    @ApiResponse({
        status: 200,
        description: 'Password reset request completed successfully',
        type: BaseResponseDto,
    })
    resetPasswordRequest(@Body() payload: ResetPasswordRequestDto, @Res() res) {
        this.auth.requestPasswordReset(payload, res);
    }

}
