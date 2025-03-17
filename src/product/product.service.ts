import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable() 
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      console.log('Received DTO:', createProductDto); // Debug log
      const newProduct = this.productRepository.create(createProductDto); // Map DTO to Entity
      console.log('Mapped Entity:', newProduct); // Debug log
      return await this.productRepository.save(newProduct); // Save to DB
    } catch (error) {
      console.error('Error saving product:', error);
      throw new Error('Unable to save product');
    }
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { product_id: id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    await this.productRepository.update(id, updateProductDto);
    return this.productRepository.findOne({ where: { product_id: id } });
  }

  async updateQuantities(updateQuantitiesDto: { product_id: number; quantity: number }[]) {
    for (const { product_id, quantity } of updateQuantitiesDto) {
      const product = await this.productRepository.findOne({ where: { product_id } });
  
      if (product) {
        product.quantity -= quantity;
        if (product.quantity < 0) product.quantity = 0;
        await this.productRepository.save(product);
      }
    }
    return { message: 'Quantities updated successfully' };
  }
  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }

   async findByLocation(locationName: string): Promise<Product[]> {
    return this.productRepository.find({ where: { location_name: locationName } });
  }
}
