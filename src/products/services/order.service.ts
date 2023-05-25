import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Order } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async findOrder(id: number): Promise<Order | null> {
    throw new NotImplementedException();
  }

  async getAllOrders(): Promise<Order[]> {
    throw new NotImplementedException();
  }

  async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    throw new NotImplementedException();
  }

  async updateOrder(params: {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.OrderUpdateInput;
  }): Promise<Order> {
    throw new NotImplementedException();
  }

  async deleteOrder(where: Prisma.OrderWhereUniqueInput): Promise<Order> {
    throw new NotImplementedException();
  }
}
