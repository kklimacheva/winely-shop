import { Client, Prisma } from '@prisma/client';
import { OrderModel } from "../products/order.model";

export class ClientModel {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  order: OrderModel[];

  static toCreateInput(client: ClientModel): Prisma.ClientCreateInput {
    return {
      name: client.name,
      email: client.email,
      isAdmin: client.isAdmin,
    };
  }

  static fromClient(client: Client): ClientModel {
    const clientModel = new ClientModel();
    clientModel.name = client.name;
    clientModel.email = client.email;
    clientModel.isAdmin = client.isAdmin;
    return clientModel;
  }
}
