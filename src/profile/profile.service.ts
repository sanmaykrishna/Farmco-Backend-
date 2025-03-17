import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async findOrCreateUserProfile(userid: number): Promise<Profile> {
    console.log("Received profile data:", CreateProfileDto); // Debugging
    let profile = await this.profileRepository.findOne({ where: { userid } });

    if (!profile) {
      profile = this.profileRepository.create({
        userid,
        building: 'Nil',
        place: 'Nil',
        pincode: 'Nil',
        phone: 'Nil',
      });

      await this.profileRepository.save(profile);
    }

    return profile;
  }

  async createOrUpdateProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    const { userid, building, place, pincode, phone } = createProfileDto;
    
    let profile = await this.profileRepository.findOne({ where: { userid } });

    if (!profile) {
      profile = this.profileRepository.create({
        userid,
        building: building || 'Nil',
        place: place || 'Nil',
        pincode: pincode || 'Nil',
        phone: phone || 'Nil',
      });
    } else {
      Object.assign(profile, createProfileDto);
    }

    return await this.profileRepository.save(profile);
  }

  async getProfile(userid: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({ where: { userid } });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }
}

