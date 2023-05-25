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

import {
  ApiBasicAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  DocumentBuilder,
} from '@nestjs/swagger';
import { WineTypeDto } from '../wine.type.dto';
import { WineTypeService } from '../services/wine.type.service';
import { WineType } from '@prisma/client';
import { AuthGuard } from '../../auth/auth/auth.guard';

@ApiTags('wine-types')
@Controller('wine-types')
@UseGuards(new AuthGuard())
export class WineTypeController {
  constructor(private readonly wineTypeService: WineTypeService) {}
  options = new DocumentBuilder().addBasicAuth();
  @ApiOperation({
    summary: 'Get all types',
  })
  @ApiResponse({
    status: 200,
    description: 'Wines list successfully received.',
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
  async getAllWines(): Promise<WineType[]> {
    return this.wineTypeService.getAllWineTypes();
  }

  @ApiOperation({
    summary: 'Get type by id',
  })
  @ApiResponse({
    status: 201,
    description: 'Type successfully received.',
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
  async getWineById(@Param('id') id: number): Promise<WineType> {
    return this.wineTypeService.findWineType(id);
  }

  @ApiOperation({
    summary: 'Create new type',
  })
  @ApiResponse({
    status: 201,
    description: 'Type successfully created.',
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
  @ApiBody({ type: WineTypeDto })
  async createWine(@Body() wineData: WineTypeDto): Promise<WineType> {
    return this.wineTypeService.createWineType(wineData);
  }

  @ApiOperation({
    summary: "Update type's info",
  })
  @Put(':id')
  @ApiResponse({
    status: 201,
    description: "Type's list successfully updated.",
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @ApiBody({ type: WineTypeDto })
  async updateWine(
    @Param('id') id: number,
    @Body() data: WineTypeDto,
  ): Promise<WineType> {
    return this.wineTypeService.updateWineType(id, data);
  }

  @ApiOperation({
    summary: 'Delete type by his id',
  })
  @ApiResponse({
    status: 201,
    description: 'Type successfully deleted.',
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
  async deleteWine(@Param('id') id: number): Promise<WineType> {
    return this.wineTypeService.deleteWineType(id);
  }
}
