import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollabDto } from './dto/create-collab.dto';
import { Collab } from './entities/collab.entity';
import { UpdateCollabDto } from './dto/update-collab.dto';

@Injectable()
export class CollabService {
  constructor(
    @InjectRepository(Collab)
    private readonly collabRepository: Repository<Collab>,
  ) {}

  async create(createCollabDto: CreateCollabDto): Promise<Collab> {
    const newCollab = this.collabRepository.create(createCollabDto);
    return await this.collabRepository.save(newCollab);
  }

  async findAll(): Promise<Collab[]> {
    return this.collabRepository.find();
  }

  async findOne(id: number): Promise<Collab> {
    return this.collabRepository.findOne({ where: { collab_id: id } });
  }

  async update(id: number, updateCollabDto: UpdateCollabDto): Promise<Collab> {
    await this.collabRepository.update(id, updateCollabDto);
    return this.collabRepository.findOne({ where: { collab_id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.collabRepository.delete(id);
  }

  async findByLocation(locationName: string): Promise<Collab[]> {
    return this.collabRepository.find({ where: { location_name: locationName } });
  }
}