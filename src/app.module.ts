import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-todos'),
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
