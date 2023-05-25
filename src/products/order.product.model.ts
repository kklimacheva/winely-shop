import { ProductModel } from './product.model';
import { OrderModel } from './order.model';

export class OrderProductModel {
  id: number;
  quantity: number;
  product: ProductModel;
  productId: number;
  order: OrderModel;
  orderId: number;
}
