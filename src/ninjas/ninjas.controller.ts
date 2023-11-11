import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BlethGuard } from 'src/bleth/bleth.guard';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'Sword' | 'Star') {
    return this.ninjasService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getOneNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  @UseGuards(BlethGuard)
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ) {
    return this.ninjasService.updateNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  removeNinja(@Param('id', ParseIntPipe) id: number) {
    return this.ninjasService.removeNinja(id);
  }
}
