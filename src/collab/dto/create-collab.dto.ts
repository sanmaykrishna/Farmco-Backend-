import { IsNotEmpty, IsNumber, IsString, IsDecimal } from 'class-validator';

export class CreateCollabDto {
  @IsNotEmpty()
  @IsString()
  item_name: string;

  @IsNotEmpty()
  @IsString()
  location_name: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  pincode: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number; // Ensure this is a number
}