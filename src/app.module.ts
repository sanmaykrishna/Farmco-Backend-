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
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { Quantity } from './quantity/entities/quantity.entity';
import { QuantityModule } from './quantity/quantity.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'farmco',
    entities:[User,Item,Location,Product,Cart,Collab,Profile,Quantity],
    synchronize:true,
  }),UsersModule, ItemModule, LocationModule, ProductModule, CartModule, CollabModule, ProfileModule, QuantityModule,JwtModule.register({
    secret: process.env.JWT_SECRET || "a9f8e7d6c5b4a3f2g1h0i9j8k7l6m5n4", // Use environment variables for security
      signOptions: { expiresIn: '1h' },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
