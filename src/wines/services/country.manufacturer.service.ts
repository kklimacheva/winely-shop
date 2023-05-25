import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CountryManufacturerDto } from '../country.manufacturer.dto';
import { CountryManufacturerModel } from '../manufacturer.model';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CountryManufacturerService {
  constructor(private readonly prisma: PrismaService) {}

  async findCountryManufacturer(
    id: number,
  ): Promise<CountryManufacturerModel | null> {
    const country = await this.prisma.countryManufacturer.findUnique({
      where: { id: Number(id) },
    });
    if (!country) {
      throw new HttpException('Country not found', HttpStatus.NOT_FOUND);
    }
    return CountryManufacturerModel.fromCountryManufacturer(country);
  }

  async getAllCountryManufacturers(): Promise<CountryManufacturerModel[]> {
    return this.prisma.countryManufacturer.findMany();
  }

  async createCountryManufacturer(
    data: CountryManufacturerDto,
  ): Promise<CountryManufacturerModel> {
    const manufacturer = new CountryManufacturerModel();
    manufacturer.countyCode = data.code;
    manufacturer.name = data.name;

    const countryCreateInput: Prisma.CountryManufacturerCreateInput =
      CountryManufacturerModel.toCreateInput(manufacturer);

    await this.prisma.countryManufacturer.create({ data: countryCreateInput });

    return manufacturer;
  }

  async updateCountryManufacturer(
    id: number,
    data: CountryManufacturerDto,
  ): Promise<CountryManufacturerModel> {
    const manufacturer = await this.prisma.countryManufacturer.update({
      where: { id: Number(id) },
      data: {
        name: data.name,
        countyCode: data.code,
      },
    });
    return {
      id: manufacturer.id,
      name: manufacturer.name,
      countyCode: manufacturer.countyCode,
    };
  }

  async deleteCountryManufacturer(
    id: number,
  ): Promise<CountryManufacturerModel> {
    const manufacturer = await this.prisma.countryManufacturer.delete({
      where: { id: Number(id) },
    });
    return {
      id: manufacturer.id,
      name: manufacturer.name,
      countyCode: manufacturer.countyCode,
    };
  }
}
