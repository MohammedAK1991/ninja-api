import { Module } from '@nestjs/common';
import { NinjasController } from './ninjas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NinjaModel, NinjaSchema } from './ninja.schema';
import { NinjasService } from './ninjas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NinjaModel.name, schema: NinjaSchema }]),
    // Add any other modules you are using in NinjasModule
  ],
  controllers: [NinjasController],
  providers: [NinjasService],
})
export class NinjasModule {}
