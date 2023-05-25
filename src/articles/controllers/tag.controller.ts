import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagService } from '../services/tag.service';
import { TagDto } from '../tag.dto';
import { TagModel } from '../tag.model';

@ApiTags('tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @ApiOperation({
    summary: 'Get all tags',
  })
  @ApiResponse({
    status: 201,
    description: 'Tags list successfully received.',
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
  async getAllTags(): Promise<TagModel[]> {
    return this.tagService.getAllTags();
  }

  @ApiOperation({
    summary: 'Get tag by id',
  })
  @ApiResponse({
    status: 201,
    description: 'Tag successfully received.',
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
  async getTagById(@Param('id') id: number): Promise<TagModel> {
    return this.tagService.findTag(id);
  }

  @ApiOperation({
    summary: 'Create new tag',
  })
  @ApiResponse({
    status: 201,
    description: 'Tag successfully created.',
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
  @ApiBody({ type: TagDto })
  async createTag(@Body() TagData: TagDto): Promise<TagModel> {
    return this.tagService.createTag(TagData);
  }

  @ApiOperation({
    summary: "Update tag's info",
  })
  @Put(':id')
  @ApiResponse({
    status: 201,
    description: "Tag's list successfully updated.",
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @ApiBody({ type: TagDto })
  async updateTag(
    @Param('id') id: number,
    @Body() data: TagDto,
  ): Promise<TagModel> {
    return this.tagService.updateTag(id, data);
  }

  @ApiOperation({
    summary: "Delete tag by it's id",
  })
  @ApiResponse({
    status: 201,
    description: 'Tag successfully deleted.',
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
  async deleteTag(@Param('id') id: number): Promise<TagModel> {
    return this.tagService.deleteTag(id);
  }
}
