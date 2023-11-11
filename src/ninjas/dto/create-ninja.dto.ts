import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['Sword', 'Star'], { message: 'Weapon must be either Sword or Star' })
  weapon: 'Sword' | 'Star';
}
