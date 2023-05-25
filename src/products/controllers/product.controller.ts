import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from '../product.dto';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../product.model';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({
    summary: 'Get all products',
  })
  @ApiResponse({
    status: 200,
    description: 'Products list successfully received.',
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
  async getAllProducts(): Promise<ProductModel[]> {
    return this.productService.getAllProducts();
  }

  @ApiOperation({
    summary: 'Get product by id',
  })
  @ApiResponse({
    status: 201,
    description: 'Product successfully received.',
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
  async getProductById(@Param('id') id: number): Promise<ProductModel> {
    return this.productService.findProduct(id);
  }

  @ApiOperation({
    summary: 'Create new product',
  })
  @ApiResponse({
    status: 201,
    description: 'Product successfully created.',
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
  @ApiBody({ type: ProductDto })
  async createProduct(@Body() productData: ProductDto): Promise<ProductModel> {
    return this.productService.createProduct(productData);
  }

  @ApiOperation({
    summary: "Update product's info",
  })
  @Put(':id')
  @ApiResponse({
    status: 201,
    description: "Product's list successfully updated.",
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'We are currently working to add this feature :(',
  })
  @ApiBody({ type: ProductDto })
  async updateProduct(
    @Param('id') id: number,
    @Body() data: ProductDto,
  ): Promise<ProductModel> {
    return this.productService.updateProduct(id, data);
  }

  @ApiOperation({
    summary: 'Delete product by his id',
  })
  @ApiResponse({
    status: 201,
    description: 'Product successfully deleted.',
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
  async deleteProduct(@Param('id') id: number): Promise<ProductModel> {
    return this.productService.deleteProduct(id);
  }
}
