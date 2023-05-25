import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class ClientDto {
  @ApiProperty({ example: 'John', description: 'The name of the client' })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'The email address of the client',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'True',
    description: 'Shows if client is an admin.',
  })
  @IsBoolean()
  readonly isAdmin: boolean;
}
