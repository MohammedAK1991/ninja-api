import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    NinjasModule,
    UsersModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URI,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
