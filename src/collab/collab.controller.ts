import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CollabService } from './collab.service';
import { CreateCollabDto } from './dto/create-collab.dto';
import { UpdateCollabDto } from './dto/update-collab.dto';

@Controller('collab')
export class CollabController {
  constructor(private readonly collabService: CollabService) {}

  @Post()
  async create(@Body() createCollabDto: CreateCollabDto) {
    console.log('Received DTO:', createCollabDto); // Debug log
    return this.collabService.create(createCollabDto);
  }

  @Get()
  async findAll() {
    return this.collabService.findAll();
  }

  @Get('location')
  async findByLocation(@Query('location_name') locationName: string) {
    return this.collabService.findByLocation(locationName);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.collabService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCollabDto: UpdateCollabDto) {
    return this.collabService.update(+id, updateCollabDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.collabService.remove(+id);
  }
}