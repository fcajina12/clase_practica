import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ required: true, example: 'John Doe' })
  name: string;
  @ApiProperty({ required: true, example: 'usuario@empresa.com' })
  email: string;
  username: string;
  @ApiProperty({ required: true, example: '123' })
  password: string;
  @ApiProperty({ required: true, description: 'Tenant ID' })
  tenantId: number;
}
