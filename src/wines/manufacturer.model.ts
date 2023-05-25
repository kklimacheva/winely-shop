import { WineModel } from './wine.model';
import { CountryManufacturer, Prisma } from '@prisma/client';

export class CountryManufacturerModel {
  id: number;
  countyCode: string;
  name: string;
  wines?: WineModel[];

  static toCreateInput(
    country: CountryManufacturerModel,
  ): Prisma.CountryManufacturerCreateInput {
    return {
      name: country.name,
      countyCode: country.countyCode,
    };
  }

  static fromCountryManufacturer(
    country: CountryManufacturer,
  ): CountryManufacturerModel {
    const clientModel = new CountryManufacturerModel();
    clientModel.name = country.name;
    clientModel.countyCode = country.countyCode;
    return clientModel;
  }
}
