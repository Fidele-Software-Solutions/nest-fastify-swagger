import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { AuthUtilsService } from './services/auth-utils/auth-utils.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthUtilsService]
})
export class AuthenticationModule {}
