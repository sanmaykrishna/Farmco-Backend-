import { IsOptional, IsNotEmpty, IsNumber, IsString, IsDecimal } from 'class-validator';

export class UpdateCollabDto {
  @IsOptional()
  @IsString()
  item_name?: string;

  @IsOptional()
  @IsString()
  location_name?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsDecimal()
  price?: number;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  pincode?: number;

  @IsOptional()
  @IsNumber()
  user_id?: number; // Ensure this is optional as well
}