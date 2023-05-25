import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { WineTypeDto } from './wine.type.dto';
import { CountryManufacturerDto } from './country.manufacturer.dto';

export class WineDto {
  @ApiProperty({
    example: 'Cabernet sauvignon',
    description: 'Wine name',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: '12',
    description: 'Id of wine type',
  })
  readonly wineType: number;

  @ApiProperty({
    example: 'FR',
    description: 'Manufacturer country code',
  })
  readonly manufacturer: string;
}
