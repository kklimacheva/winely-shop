import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TagDto } from '../tag.dto';
import { TagModel } from '../tag.model';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  async findTag(id: number): Promise<TagModel | null> {
    const tag = await this.prisma.tag.findUnique({
      where: { id: Number(id) },
    });
    if (!tag) {
      throw new HttpException('Tag not found', HttpStatus.NOT_FOUND);
    }
    return {
      id: tag.id,
      name: tag.name,
    };
  }

  async getAllTags(): Promise<TagModel[]> {
    return this.prisma.tag.findMany();
  }

  async createTag(data: TagDto): Promise<TagModel> {
    const tag = await this.prisma.tag.create({
      data: {
        name: data.name,
      },
    });
    return {
      id: tag.id,
      name: tag.name,
    };
  }

  async updateTag(id: number, data: TagDto): Promise<TagModel> {
    const tag = await this.prisma.tag.update({
      where: {
        id: Number(id),
      },
      data: {
        name: data.name,
      },
    });
    return {
      id: tag.id,
      name: tag.name,
    };
  }

  async deleteTag(id: number): Promise<TagModel> {
    const tag = await this.prisma.tag.delete({
      where: { id: Number(id) },
    });
    return {
      id: tag.id,
      name: tag.name,
    };
  }
}
