import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collab } from './entities/collab.entity';
import { CollabService } from './collab.service';
import { CollabController } from './collab.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Collab])],
  controllers: [CollabController],
  providers: [CollabService],
})
export class CollabModule {}
