import { Injectable } from '@nestjs/common';
import { WineTypeDto } from '../wine.type.dto';
import { WineTypeModel } from '../wine.type.model';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class WineTypeService {
  constructor(private readonly prisma: PrismaService) {}
  async findWineType(id: number): Promise<WineTypeModel | null> {
    const wineType = await this.prisma.wineType.findUnique({
      where: { id: Number(id) },
    });
    return {
      id: wineType.id,
      name: wineType.name,
    };
  }

  async getAllWineTypes(): Promise<WineTypeModel[]> {
    return this.prisma.wineType.findMany();
  }

  async createWineType(data: WineTypeDto): Promise<WineTypeModel> {
    const type = await this.prisma.wineType.create({
      data: {
        name: data.name,
      },
    });
    return {
      id: type.id,
      name: type.name,
    };
  }

  async updateWineType(id: number, data: WineTypeDto): Promise<WineTypeModel> {
    const type = await this.prisma.wineType.update({
      where: { id: Number(id) },
      data: { name: data.name },
    });
    return {
      id: type.id,
      name: type.name,
    };
  }

  async deleteWineType(id: number): Promise<WineTypeModel> {
    const type = await this.prisma.wineType.delete({
      where: { id: Number(id) },
    });
    return {
      id: type.id,
      name: type.name,
    };
  }
}
