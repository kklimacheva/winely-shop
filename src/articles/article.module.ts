import { Module } from '@nestjs/common';
import { ArticleController } from './controllers/article.controller';
import { ArticleService } from './services/article.service';
import { TagService } from './services/tag.service';
import { TagController } from './controllers/tag.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ArticleController, TagController],
  providers: [PrismaService, ArticleService, TagService],
})
export class ArticleModule {}
