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
import { WineService } from '../services/wine.service';

import { ApiBasicAuth, ApiBody, ApiOperation, ApiResponse, ApiTags, DocumentBuilder } from "@nestjs/swagger";
import { Wine } from '@prisma/client';
import { WineDto } from '../wine.dto';
import { WineModel } from '../wine.model';
import { AuthGuard } from '../../auth/auth/auth.guard';

@ApiTags('wines')
@Controller('wines')
@UseGuards(new AuthGuard())
export class WineController {
  constructor(private readonly wineService: WineService) {}
  options = new DocumentBuilder().addBasicAuth();
  @ApiOperation({
    summary: 'Get all wines',
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
  async getAllWines(): Promise<Wine[]> {
    return this.wineService.getAllWines();
  }

  @ApiOperation({
    summary: 'Get wine by id',
  })
  @ApiResponse({
    status: 201,
    description: 'Wine successfully received.',
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
  async getWineById(@Param('id') id: number): Promise<Wine> {
    return this.wineService.findWine(id);
  }

  @ApiOperation({
    summary: 'Create new wine',
  })
  @ApiResponse({
    status: 201,
    description: 'Wine successfully created.',
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
  @UseGuards(new AuthGuard())
  @ApiBody({ type: WineDto })
  async createWine(@Body() wineData: WineDto): Promise<WineModel> {
    return this.wineService.createWine(wineData);
  }

  @ApiOperation({
    summary: "Update wine's info",
  })
  @Put(':id')
  @ApiResponse({
    status: 201,
    description: "Wine's list successfully updated.",
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @ApiBody({ type: WineDto })
  async updateWine(
    @Param('id') id: number,
    @Body() data: WineDto,
  ): Promise<Wine> {
    return this.wineService.updateWine(id, data);
  }

  @ApiOperation({
    summary: 'Delete wine by his id',
  })
  @ApiResponse({
    status: 201,
    description: 'Wine successfully deleted.',
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
  async deleteWine(@Param('id') id: number): Promise<Wine> {
    return this.wineService.deleteWine(id);
  }
}
