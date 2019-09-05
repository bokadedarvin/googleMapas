import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './api/role/role.module';
import { MarkerModule } from './api/marker/marker.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(),
    RoleModule,
    MarkerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}