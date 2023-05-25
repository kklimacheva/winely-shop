import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CountryManufacturer } from '@prisma/client';

import { ApiBasicAuth, ApiBody, ApiOperation, ApiResponse, ApiTags, DocumentBuilder } from "@nestjs/swagger";
import { CountryManufacturerService } from '../services/country.manufacturer.service';
import { CountryManufacturerDto } from '../country.manufacturer.dto';
import { AuthGuard } from '../../auth/auth/auth.guard';

@ApiTags('manufacturers')
@Controller('manufacturer')
@UseGuards(new AuthGuard())
export class ManufacturerController {
  constructor(
    private readonly manufacturerService: CountryManufacturerService,
  ) {}
  options = new DocumentBuilder().addBasicAuth();

  @ApiOperation({
    summary: 'Get all manufacturers',
  })
  @ApiResponse({
    status: 200,
    description: 'Manufacturers list successfully received.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Get()
  async getAllCountryManufacturer(): Promise<CountryManufacturer[]> {
    return this.manufacturerService.getAllCountryManufacturers();
  }

  @ApiOperation({
    summary: 'Get manufacturer by id',
  })
  @ApiResponse({
    status: 201,
    description: 'Manufacturer successfully received.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Get(':id')
  async getClientById(@Param('id') id: number): Promise<CountryManufacturer> {
    return this.manufacturerService.findCountryManufacturer(id);
  }

  @ApiOperation({
    summary: 'Create new manufacturer',
  })
  @ApiResponse({
    status: 201,
    description: 'Manufacturer successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Post()
  @ApiBasicAuth()
  @ApiBody({ type: CountryManufacturerDto })
  async createClient(
    @Body() data: CountryManufacturerDto,
  ): Promise<CountryManufacturer> {
    return this.manufacturerService.createCountryManufacturer(data);
  }

  @ApiOperation({
    summary: "Update manufacturer's info",
  })
  @Put(':id')
  @ApiResponse({
    status: 201,
    description: 'Manufacturers list successfully updated.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @ApiBody({ type: CountryManufacturerDto })
  async updateClient(
    @Param('id') id: number,
    @Body() data: CountryManufacturerDto,
  ): Promise<CountryManufacturer> {
    return this.manufacturerService.updateCountryManufacturer(id, data);
  }

  @ApiOperation({
    summary: 'Delete manufacturer by his id',
  })
  @ApiResponse({
    status: 201,
    description: 'Manufacturer successfully deleted.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @Delete(':id')
  @ApiBasicAuth()
  async deleteClient(@Param('id') id: number): Promise<CountryManufacturer> {
    return this.manufacturerService.deleteCountryManufacturer(id);
  }
}
