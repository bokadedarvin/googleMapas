import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeService } from './type.service';
import { Type } from './type.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule {
}
