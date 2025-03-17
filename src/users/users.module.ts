import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({imports: [TypeOrmModule.forFeature([User]),JwtModule.register({   // Register the JWT Module
  secret: process.env.JWT_SECRET || "a9f8e7d6c5b4a3f2g1h0i9j8k7l6m5n4",
  signOptions: { expiresIn: '1h' },
}),],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
