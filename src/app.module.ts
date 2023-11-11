import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

const uri =
  'mongodb+srv://mohammedak1991:Aydinzaki_123@cluster0.k5gzuww.mongodb.net/?retryWrites=true&w=majority';

@Module({
  imports: [NinjasModule, UsersModule, MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
