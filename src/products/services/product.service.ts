import { Injectable } from '@nestjs/common';
import { ProductDto } from '../product.dto';
import { ProductModel } from '../product.model';
import { PrismaService } from '../../prisma.service';
import { WineService } from '../../wines/services/wine.service';
import { Product } from '@prisma/client';
import { AppGateway } from '../../gateway/app.gateway';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly wineService: WineService,
    private readonly appGateway: AppGateway,
  ) {}

  async findProduct(id: number): Promise<ProductModel | null> {
    const product = await this.prisma.product.findUnique({
      where: { id: Number(id) },
    });
    const _wine = await this.wineService.findWine(Number(product.wineId));
    return {
      id: product.id,
      wine: _wine,
      wineId: _wine.id,
      price: product.price,
    };
  }

  async getAllProducts(): Promise<ProductModel[]> {
    const products: Product[] = await this.prisma.product.findMany();
    const productModels: ProductModel[] = [];
    for (const product of products) {
      const productModel: ProductModel = new ProductModel();
      const wine = await this.wineService.findWine(Number(product.wineId));
      productModel.id = product.id;
      productModel.price = product.price;
      productModel.wineId = product.wineId;
      productModel.wine = wine;
      productModels.push(productModel);
    }
    return productModels;
  }

  async createProduct(data: ProductDto): Promise<ProductModel> {
    const _wine = await this.wineService.findWine(Number(data.wineId));
    const product = await this.prisma.product.create({
      data: {
        wineId: data.wineId,
        price: Number(data.price),
      },
    });
    const model = new ProductModel();
    model.id = product.id;
    model.wine = _wine;
    model.wineId = _wine.id;
    model.price = product.price;
    this.appGateway.server.emit('newProductAdded', model);
    return model;
  }

  async updateProduct(id: number, data: ProductDto): Promise<ProductModel> {
    const _wine = await this.wineService.findWine(Number(data.wineId));
    const product = await this.prisma.product.update({
      where: { id: Number(id) },
      data: {
        price: Number(data.price),
        wineId: data.wineId,
      },
    });
    return {
      id: product.id,
      wine: _wine,
      wineId: _wine.id,
      price: product.price,
    };
  }

  async deleteProduct(id: number): Promise<ProductModel> {
    const product = await this.prisma.product.delete({
      where: { id: Number(id) },
    });
    const _wine = await this.wineService.findWine(Number(product.wineId));
    return {
      id: product.id,
      wine: _wine,
      wineId: _wine.id,
      price: product.price,
    };
  }
}
