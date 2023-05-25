import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ArticleDto {
  @ApiProperty({
    example: 'How to choose French wine?',
    description: 'Title of the article',
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    example: 'Bla-bla-bla',
    description: 'The main content of the article',
  })
  @IsString()
  readonly content: string;
}
