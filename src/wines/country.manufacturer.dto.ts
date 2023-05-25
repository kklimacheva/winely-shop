import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CountryManufacturerDto {
  @ApiProperty({
    example: 'Germany',
    description: 'Country name',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'DE',
    description: 'Country code',
  })
  @IsString()
  readonly code: string;
}
