import { Article, Prisma } from '@prisma/client';
import { ArticleTagModel } from './article.tag.model';

export class ArticleModel {
  id: number;
  title: string;
  content: string;
  articleTags?: ArticleTagModel[];

  static toCreateInput(article: ArticleModel): Prisma.ArticleCreateInput {
    return {
      title: article.title,
      content: article.content,
    };
  }

  static fromArticle(article: Article): ArticleModel {
    const articleModel = new ArticleModel();
    articleModel.title = article.title;
    articleModel.content = article.content;
    return articleModel;
  }
}
