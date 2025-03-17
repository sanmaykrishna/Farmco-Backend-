import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateQuantityDto {
  @IsInt()
  @IsNotEmpty()
  collabid: number;

  @IsInt()
  @IsNotEmpty()
  empid: number;

  @IsInt()
  @IsNotEmpty()
  qty: number;
}