import { Injectable, NotImplementedException } from '@nestjs/common';
import { WineDto } from '../wine.dto';
import { WineModel } from '../wine.model';
import { PrismaService } from '../../prisma.service';
import { CountryManufacturerService } from './country.manufacturer.service';
import { WineTypeService } from './wine.type.service';

@Injectable()
export class WineService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly manufacturerService: CountryManufacturerService,
    private readonly wineTypeService: WineTypeService,
  ) {}

  async findWine(id: number): Promise<WineModel | null> {
    const wine = await this.prisma.wine.findUnique({
      where: { id: Number(id) },
    });
    const manufacturer = await this.manufacturerService.findCountryManufacturer(
      Number(wine.manufacturerId),
    );
    const wineType = await this.wineTypeService.findWineType(
      Number(wine.wineTypeId),
    );
    return {
      id: wine.id,
      name: wine.name,
      manufacturer: manufacturer,
      manufacturerId: manufacturer.id,
      wineType: wineType,
      wineTypeId: wineType.id,
    };
  }

  async getAllWines(): Promise<WineModel[]> {
    throw new NotImplementedException();
  }

  async createWine(data: WineDto): Promise<WineModel> {
    const manufacturer = await this.prisma.countryManufacturer.findUnique({
      where: { countyCode: data.manufacturer },
    });
    const wineType = await this.wineTypeService.findWineType(
      Number(data.wineType),
    );
    const newWine = await this.prisma.wine.create({
      data: {
        name: data.name,
        manufacturerId: manufacturer.id,
        wineTypeId: wineType.id,
      },
    });
    return {
      id: newWine.id,
      name: newWine.name,
      manufacturer: manufacturer,
      manufacturerId: manufacturer.id,
      wineType: wineType,
      wineTypeId: wineType.id,
    };
  }

  async updateWine(id: number, data: WineDto): Promise<WineModel> {
    const manufacturer = await this.prisma.countryManufacturer.findUnique({
      where: { countyCode: data.manufacturer },
    });
    const wineType = await this.wineTypeService.findWineType(
      Number(data.wineType),
    );
    const wine = await this.prisma.wine.update({
      where: { id: Number(id) },
      data: {
        wineTypeId: Number(data.wineType),
        manufacturerId: manufacturer.id,
      },
    });
    return {
      id: wine.id,
      name: wine.name,
      manufacturer: manufacturer,
      manufacturerId: manufacturer.id,
      wineType: wineType,
      wineTypeId: wineType.id,
    };
  }

  async deleteWine(id: number): Promise<WineModel> {
    const wine = await this.prisma.wine.delete({
      where: { id: Number(id) },
    });
    const manufacturer = await this.manufacturerService.findCountryManufacturer(
      Number(wine.manufacturerId),
    );
    const wineType = await this.wineTypeService.findWineType(
      Number(wine.wineTypeId),
    );
    return {
      id: wine.id,
      name: wine.name,
      manufacturer: manufacturer,
      manufacturerId: manufacturer.id,
      wineType: wineType,
      wineTypeId: wineType.id,
    };
  }
}
