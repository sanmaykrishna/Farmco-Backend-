import { Controller, Post, Body, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('newuser')
  async createUsers(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.createUsers(createUserDto);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw error;
    }
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      return await this.usersService.validateUser(loginUserDto.email, loginUserDto.password);
    } catch (error) {
      if (error instanceof UnauthorizedException || error instanceof NotFoundException) {
        throw error;
      }
      throw new UnauthorizedException('Invalid login credentials');
    }
  }
}
