import { Injectable, NotFoundException,ConflictException,UnauthorizedException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ){}

  async createUsers(userData: CreateUserDto) {

    // Check if email already exists
    const existingUser = await this.userRepository.findOneBy({ email: userData.email });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    // Create and save user
    const responseData  = this.userRepository.create(userData);
    return await this.userRepository.save(responseData);
  }

  async validateUser(email: string, password: string): Promise<{ user_id: number; user_name: string } | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    if (user.password !== password) {
      throw new UnauthorizedException('Invalid password');
    }
  
    return { user_id: user.user_id, user_name: user.user_name }; // Return user_id and user_name
  }
  
}
