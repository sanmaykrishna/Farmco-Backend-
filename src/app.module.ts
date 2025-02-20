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
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/entities/cart.entity';
import { CollabModule } from './collab/collab.module';
import { Collab } from './collab/entities/collab.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'farmco',
    entities:[User,Item,Location,Product,Cart,Collab],
    synchronize:true,
  }),UsersModule, ItemModule, LocationModule, ProductModule, CartModule, CollabModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
