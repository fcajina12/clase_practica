import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginDto } from './dto/Login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() body: LoginDto) {
    const token = this.authService.validateUser(body);
    if (!token)
      throw new HttpException(
        'Credenciales invalidas',
        HttpStatus.UNAUTHORIZED,
      );
    return token;
  }
}
