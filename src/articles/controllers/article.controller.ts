import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from '../services/article.service';

import {
  ApiBasicAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  DocumentBuilder,
} from '@nestjs/swagger';
import { ArticleDto } from '../article.dto';
import { ArticleModel } from '../article.model';
import { AuthGuard } from '../../auth/auth/auth.guard';

@ApiTags('articles')
@Controller('article')
@UseGuards(new AuthGuard())
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  options = new DocumentBuilder().addBasicAuth();

  @ApiOperation({
    summary: 'Get all articles',
  })
  @ApiResponse({
    status: 200,
    description: 'Articles list successfully received.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Get()
  async getAllArticles(): Promise<ArticleModel[]> {
    return this.articleService.getAllArticles();
  }

  @ApiOperation({
    summary: 'Get article by id',
  })
  @ApiResponse({
    status: 201,
    description: 'Article successfully received.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Get(':id')
  async getArticleById(@Param('id') id: number): Promise<ArticleModel> {
    return this.articleService.findArticle(id);
  }

  @ApiOperation({
    summary: 'Create new Article',
  })
  @ApiResponse({
    status: 201,
    description: 'Article successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Post()
  @ApiBasicAuth()
  @ApiBody({ type: ArticleDto })
  async createArticle(@Body() ArticleData: ArticleDto): Promise<ArticleModel> {
    return this.articleService.createArticle(ArticleData);
  }

  @ApiOperation({
    summary: "Update article's info",
  })
  @Put(':id')
  @ApiResponse({
    status: 201,
    description: "Article's list successfully updated.",
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @ApiBody({ type: ArticleDto })
  async updateArticle(
    @Param('id') id: number,
    @Body() data: ArticleDto,
  ): Promise<ArticleModel> {
    return this.articleService.updateArticle(id, data);
  }

  @ApiOperation({
    summary: "Delete article by it's id",
  })
  @ApiResponse({
    status: 201,
    description: 'Article successfully deleted.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Delete(':id')
  @ApiBasicAuth()
  async deleteArticle(@Param('id') id: number): Promise<ArticleModel> {
    return this.articleService.deleteArticle(id);
  }
}
