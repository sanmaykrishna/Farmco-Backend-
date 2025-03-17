import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { QuantityService } from './quantity.service';
import { CreateQuantityDto } from './dto/create-quantity.dto';

@Controller('quantity')
export class QuantityController {
  constructor(private readonly quantityService: QuantityService) {}

  // Create a new quantity entry if collabid does not exist
  @Post()
  async create(@Body() createQuantityDto: CreateQuantityDto) {
    return this.quantityService.create(createQuantityDto);
  }

  // Create a new quantity entry with a different controller name if collabid exists
  @Post('alternate')
  async createWithDifferentController(@Body() createQuantityDto: CreateQuantityDto) {
    return this.quantityService.createWithDifferentController(createQuantityDto);
  }

  // Get the total quantity for a given collabid
  @Get('total')
  async getTotalQuantity(@Query('collabid') collabid: string) {
    return this.quantityService.getTotalQuantityByCollabId(Number(collabid)); 
  }

  // Get the count of unique users for a given collabid
  @Get('user-count')
  async getUserCount(@Query('collabid') collabid: number) {
    return this.quantityService.getUserCountByCollabId(Number(collabid));
  }
}
