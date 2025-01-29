import { Controller, Get, Query,Post ,Body} from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  // Get all location or filter by a search term
  @Get()
  async findAllLocation(@Query('search') search?: string) {
    try {
      if (search) {
        return await this.locationService.searchLocation(search);
      }
      return await this.locationService.findAllLocation();
    } catch (error) {
      return { message: 'Error fetching location', error: error.message };
    }
  }


  @Post()
  async createLocation(@Body() location: Partial<Location>) {
    try {
      return await this.locationService.createLocation(location);
    } catch (error) {
      return { message: 'Error creating location', error: error.message };
    }
  }
}

