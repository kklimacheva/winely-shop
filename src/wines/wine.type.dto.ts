import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class WineTypeDto {
  @ApiProperty({
    example: 'White dry',
    description: 'Wine type name',
  })
  @IsString()
  readonly name: string;
}
