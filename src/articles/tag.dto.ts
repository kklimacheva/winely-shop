import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TagDto {
  @ApiProperty({
    example: 'Red wine',
    description: 'Tag name',
  })
  @IsString()
  readonly name: string;
}
