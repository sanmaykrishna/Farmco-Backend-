import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':userid')
  async getProfile(@Param('userid') userid: number) {
    return await this.profileService.getProfile(userid);
  }
  
  @Post()
  async createOrUpdateProfile(@Body() createProfileDto: CreateProfileDto) {
    return await this.profileService.createOrUpdateProfile(createProfileDto);
  }
}
