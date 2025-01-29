import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location) private readonly locationRepository: Repository<Location>,
  ) {}

  // Find all items
  async findAllLocation() {
    try {
      return await this.locationRepository.find();
    } catch (error) {
      throw new Error(`Error fetching location: ${error.message}`);
    }
  }

  // Search for Location by name
  async searchLocation(search: string) {
    try {
      return await this.locationRepository.find({
        where: { location_name: ILike(`%${search}%`) }, // Case-insensitive search
        order: { location_name: 'ASC' }, // Optional: Sort alphabetically
      });
    } catch (error) {
      throw new Error(`Error searching location: ${error.message}`);
    }
  }

  async createLocation(location: Partial<Location>) {
    try {
      const newLocation = this.locationRepository.create(location); // Create a new item instance
      return await this.locationRepository.save(newLocation); // Save it to the database
    } catch (error) {
      throw new Error(`Error creating location: ${error.message}`);
    }
  }
}
