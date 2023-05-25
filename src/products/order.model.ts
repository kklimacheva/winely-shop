import { OrderProductModel } from './order.product.model';
import { ClientModel } from '../clients/client.model';

export class OrderModel {
  id: number;
  date: Date;
  total: number;
  client: ClientModel;
  clientId: number;
  products: OrderProductModel[];
}
