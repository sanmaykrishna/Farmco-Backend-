import { Controller, Get, Query,Post ,Body} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './entities/item.entity';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  // Get all items or filter by a search term
  @Get()
  async findAllItems(@Query('search') search?: string) {
    try {
      if (search) {
        return await this.itemService.searchItems(search);
      }
      return await this.itemService.findAllItems();
    } catch (error) {
      return { message: 'Error fetching items', error: error.message };
    }
  }


  @Post()
  async createItem(@Body() item: Partial<Item>) {
    try {
      return await this.itemService.createItem(item);
    } catch (error) {
      return { message: 'Error creating item', error: error.message };
    }
  }
}

