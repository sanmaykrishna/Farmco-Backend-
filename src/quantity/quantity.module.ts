import { Module } from '@nestjs/common';
import { QuantityService } from './quantity.service';
import { QuantityController } from './quantity.controller';
import { Quantity } from './entities/quantity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({imports: [TypeOrmModule.forFeature([Quantity])],
  controllers: [QuantityController],
  providers: [QuantityService],
})
export class QuantityModule {}
