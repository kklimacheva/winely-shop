import { ArticleModel } from './article.model';
import { TagModel } from './tag.model';

export class ArticleTagModel {
  id: number;
  article: ArticleModel;
  articleId: number;
  tag: TagModel;
  tagId: number;
}
