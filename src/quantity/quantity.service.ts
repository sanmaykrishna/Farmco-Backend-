import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quantity } from './entities/quantity.entity';
import { CreateQuantityDto } from './dto/create-quantity.dto';

@Injectable()
export class QuantityService {
  constructor(
    @InjectRepository(Quantity)
    private readonly quantityRepository: Repository<Quantity>,
  ) {}

  async create(createQuantityDto: CreateQuantityDto): Promise<Quantity> {
    const { collabid, empid, qty } = createQuantityDto;
    
    const existingCollab = await this.quantityRepository.findOne({ where: { collabid } });
    
    if (!existingCollab) {
      const newQuantity = this.quantityRepository.create({ collabid, empid, qty });
      return await this.quantityRepository.save(newQuantity);
    }
    
    return existingCollab;
  }

  async createWithDifferentController(createQuantityDto: CreateQuantityDto): Promise<Quantity> {
    const { collabid, empid, qty } = createQuantityDto;
    
    const existingCollab = await this.quantityRepository.findOne({ where: { collabid } });
    
    if (existingCollab) {
      const newQuantity = this.quantityRepository.create({ collabid, empid, qty });
      return await this.quantityRepository.save(newQuantity);
    }
    
    throw new Error('Collabid does not exist');
  }

  async getTotalQuantityByCollabId(collabid: number): Promise<{ totalQuantity: number }> {
    const totalQuantity = await this.quantityRepository
      .createQueryBuilder('quantity')
      .select('SUM(quantity.qty)', 'sum')
      .where('quantity.collabid = :collabid', { collabid })
      .getRawOne();
    
    return { totalQuantity: totalQuantity?.sum || 0 }; // Return an object
  }

  async getUserCountByCollabId(collabid: number): Promise<{userCount: number}> {
    const userCount = await this.quantityRepository
      .createQueryBuilder('quantity')
      .select('COUNT(DISTINCT quantity.empid)', 'count')
      .where('quantity.collabid = :collabid', { collabid })
      .getRawOne();
    
    return { userCount: userCount?.count || 0 };
  }
}
