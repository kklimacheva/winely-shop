import { Module } from '@nestjs/common';
import { WineController } from './controllers/wine.controller';
import { WineService } from './services/wine.service';
import { WineTypeService } from './services/wine.type.service';
import { WineTypeController } from './controllers/wine.type.controller';
import { ManufacturerController } from './controllers/manufacturer.controller';
import { CountryManufacturerService } from './services/country.manufacturer.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [WineController, WineTypeController, ManufacturerController],
  providers: [
    PrismaService,
    WineService,
    WineTypeService,
    CountryManufacturerService,
  ],
})
export class WineModule {}
