import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ProductDto {
  @ApiProperty({ example: '6139765', description: 'Wine id' })
  @IsNumber()
  readonly wineId: number;

  @ApiProperty({
    example: '12.95',
    description: 'Product price',
  })
  @IsNumber()
  readonly price: string;
}
