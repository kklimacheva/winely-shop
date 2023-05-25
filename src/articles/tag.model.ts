import { ArticleTagModel } from './article.tag.model';

export class TagModel {
  id: number;
  name: string;
  articles?: ArticleTagModel[];
}
