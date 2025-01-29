import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  // Find all items
  async findAllItems() {
    try {
      return await this.itemRepository.find();
    } catch (error) {
      throw new Error(`Error fetching items: ${error.message}`);
    }
  }

  // Search for items by name
  async searchItems(search: string) {
    try {
      return await this.itemRepository.find({
        where: { item_name: ILike(`%${search}%`) }, // Case-insensitive search
        order: { item_name: 'ASC' }, // Optional: Sort alphabetically
      });
    } catch (error) {
      throw new Error(`Error searching items: ${error.message}`);
    }
  }

  async createItem(item: Partial<Item>) {
    try {
      const newItem = this.itemRepository.create(item); // Create a new item instance
      return await this.itemRepository.save(newItem); // Save it to the database
    } catch (error) {
      throw new Error(`Error creating item: ${error.message}`);
    }
  }
}
