import { CreateNinjaDto } from './dto/create-ninja.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Model } from 'mongoose';
import { Ninja } from './ninja.interface';
import { NinjaModel } from './ninja.schema';

@Injectable()
export class NinjasService {
  constructor(
    @InjectModel(NinjaModel.name) private readonly ninjaModel: Model<Ninja>,
  ) {}

  async getNinjas(weapon?: 'Sword' | 'Star'): Promise<Ninja[]> {
    const query = weapon ? { weapon } : {};
    return this.ninjaModel.find(query);
  }

  async getOneNinja(id: string): Promise<Ninja> {
    const ninja = await this.ninjaModel.findById(id);
    if (!ninja) {
      throw new NotFoundException('Ninja not found');
    }
    return ninja;
  }

  async createNinja(createNinjaDto: CreateNinjaDto): Promise<Ninja> {
    const newNinja = new this.ninjaModel(createNinjaDto);
    return newNinja.save();
  }

  async removeNinja(id: string): Promise<Ninja> {
    const removedNinja = await this.ninjaModel.findByIdAndDelete(id);
    if (!removedNinja) {
      throw new NotFoundException('Ninja not found');
    }
    return removedNinja;
  }

  async updateNinja(
    id: string,
    updateNinjaDto: UpdateNinjaDto,
  ): Promise<Ninja> {
    const updatedNinja = await this.ninjaModel.findByIdAndUpdate(
      id,
      updateNinjaDto,
      { new: true },
    );
    if (!updatedNinja) {
      throw new NotFoundException('Ninja not found');
    }

    return updatedNinja;
  }
}
