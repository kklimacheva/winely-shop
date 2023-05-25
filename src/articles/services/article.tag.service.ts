import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, ArticleTag } from '@prisma/client';

@Injectable()
export class ArticleTagService {
  constructor(private prisma: PrismaService) {}

  async findArticleTag(id: number): Promise<ArticleTag | null> {
    throw new NotImplementedException();
  }

  async getAllArticleTags(): Promise<ArticleTag[]> {
    throw new NotImplementedException();
  }

  async createArticleTag(
    data: Prisma.ArticleTagCreateInput,
  ): Promise<ArticleTag> {
    throw new NotImplementedException();
  }

  async updateArticleTag(params: {
    where: Prisma.ArticleTagWhereUniqueInput;
    data: Prisma.ArticleTagUpdateInput;
  }): Promise<ArticleTag> {
    throw new NotImplementedException();
  }

  async deleteArticleTag(
    where: Prisma.ArticleTagWhereUniqueInput,
  ): Promise<ArticleTag> {
    throw new NotImplementedException();
  }
}
