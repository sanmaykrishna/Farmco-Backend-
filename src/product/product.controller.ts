import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Create a new product
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
  console.log('Received DTO:', createProductDto); // Debug log
  return this.productService.create(createProductDto);
}

  // Get all products
  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get('location')
  async findByLocation(@Query('location_name') locationName: string) {
    return this.productService.findByLocation(locationName);
  }

  // Get a product by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  // Update a product by ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  // Delete a product by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
