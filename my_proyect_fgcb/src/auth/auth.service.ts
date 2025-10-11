import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/Login.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(user: LoginDto) {
    const foundUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });
    if (!foundUser) return null;
    const isValidPassword = await bcrypt.compare(
      user.password,
      foundUser.password,
    );
    if (!isValidPassword)
      throw new UnauthorizedException('Crendeciales invalidas');
    return this.jwtService.sign({
      id: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    });
  }
}
