import { CreateNinjaDto } from './dto/create-ninja.dto';
import { Injectable } from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 0,
      name: 'ninjaA',
      weapon: 'Sword',
    },
    {
      id: 1,
      name: 'ninjaB',
      weapon: 'Star',
    },
  ];

  getNinjas(weapon?: 'Sword' | 'Star') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getOneNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === +id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  removeNinja(id: number) {
    const removedNinja = this.ninjas.filter((ninja) => ninja.id == +id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== +id);
    console.log(this.ninjas);
    console.log(removedNinja);
    if (removedNinja) {
      throw new Error('Ninja not found');
    }
    return removedNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    const ninjaIndex = this.ninjas.findIndex((ninja) => ninja.id === +id);
    if (ninjaIndex === -1) {
      throw new Error('Ninja not found');
    }
    this.ninjas[ninjaIndex] = {
      ...this.ninjas[ninjaIndex],
      ...updateNinjaDto,
    };
    return this.getOneNinja(+id);
  }
}
