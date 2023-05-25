import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, OrderProduct } from '@prisma/client';

@Injectable()
export class OrderProductService {
  constructor(private prisma: PrismaService) {}

  async findOrderProduct(id: number): Promise<OrderProduct | null> {
    throw new NotImplementedException();
  }

  async getAllOrderProducts(): Promise<OrderProduct[]> {
    throw new NotImplementedException();
  }

  async createOrderProduct(
    data: Prisma.OrderProductCreateInput,
  ): Promise<OrderProduct> {
    throw new NotImplementedException();
  }

  async updateOrderProduct(params: {
    where: Prisma.OrderProductWhereUniqueInput;
    data: Prisma.OrderProductUpdateInput;
  }): Promise<OrderProduct> {
    throw new NotImplementedException();
  }

  async deleteOrderProduct(
    where: Prisma.OrderProductWhereUniqueInput,
  ): Promise<OrderProduct> {
    throw new NotImplementedException();
  }
}
