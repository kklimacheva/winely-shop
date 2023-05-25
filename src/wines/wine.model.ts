import { ProductModel } from '../products/product.model';
import { CountryManufacturerModel } from './manufacturer.model';
import { WineTypeModel } from './wine.type.model';

export class WineModel {
  id: number;
  name: string;
  manufacturerId: number;
  manufacturer: CountryManufacturerModel;
  wineTypeId: number;
  wineType: WineTypeModel;
  products?: ProductModel[];
}
