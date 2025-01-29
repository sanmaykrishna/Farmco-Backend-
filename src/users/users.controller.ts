import { Controller, Get, Post, Body, Patch, Param, Delete,ConflictException,UnauthorizedException,NotFoundException} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
        throw error; // Return conflict error to the client
      }
      throw error; // Rethrow other errors
    }
  }

  @Post('login')
async login(@Body() loginUserDto: LoginUserDto) {
  try {
    const user = await this.usersService.validateUser(loginUserDto.email, loginUserDto.password);
    return { message: 'Login successful', user }; // Return user details
  } catch (error) {
    if (error instanceof UnauthorizedException || error instanceof NotFoundException) {
      throw error;
    }
    throw new UnauthorizedException('Invalid login credentials');
  }
}

}
