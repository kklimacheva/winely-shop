import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ArticleDto } from '../article.dto';
import { ArticleModel } from '../article.model';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async findArticle(id: number): Promise<ArticleModel | null> {
    const article = await this.prisma.article.findUnique({
      where: { id: Number(id) },
    });
    if (!article) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }
    return ArticleModel.fromArticle(article);
  }

  async getAllArticles(): Promise<ArticleModel[]> {
    const articles = await this.prisma.article.findMany();
    return articles.map((article) => ArticleModel.fromArticle(article));
  }

  async createArticle(data: ArticleDto): Promise<ArticleModel> {
    const article = new ArticleModel();
    article.title = data.title;
    article.content = data.content;

    const articleCreateInput: Prisma.ArticleCreateInput =
      ArticleModel.toCreateInput(article);

    await this.prisma.article.create({ data: articleCreateInput });

    return article;
  }

  async updateArticle(id: number, data: ArticleDto): Promise<ArticleModel> {
    const updatedArticle = await this.prisma.article.update({
      where: { id: Number(id) },
      data: data,
    });
    return ArticleModel.fromArticle(updatedArticle);
  }

  async deleteArticle(id: number): Promise<ArticleModel> {
    const deletedArticle = await this.prisma.article.delete({
      where: { id: Number(id) },
    });
    return ArticleModel.fromArticle(deletedArticle);
  }
}
