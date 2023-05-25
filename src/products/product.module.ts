import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { WineService } from '../wines/services/wine.service';
import { PrismaService } from '../prisma.service';
import { CountryManufacturerService } from '../wines/services/country.manufacturer.service';
import { WineTypeService } from '../wines/services/wine.type.service';
import { AppGateway } from '../gateway/app.gateway';

@Module({
  controllers: [ProductController],
  providers: [
    PrismaService,
    ProductService,
    WineService,
    CountryManufacturerService,
    WineTypeService,
    AppGateway,
  ],
})
export class ProductModule {}
