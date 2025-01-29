import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ItemModule } from './item/item.module';

import { Item } from './item/entities/item.entity';

import { LocationModule } from './location/location.module';
import { Location } from './location/entities/location.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'farmco',
    entities:[User,Item,Location,Product],
    synchronize:true,
  }),UsersModule, ItemModule, LocationModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
