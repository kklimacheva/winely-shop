import { WineModel } from '../wines/wine.model';
import { OrderProductModel } from './order.product.model';

export class ProductModel {
  id: number;
  wine: WineModel;
  wineId: number;
  price: number;
  orders?: OrderProductModel[];
}
