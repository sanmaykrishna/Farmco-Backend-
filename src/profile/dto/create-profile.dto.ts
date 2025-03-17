import { IsDefined, IsNotEmpty, IsString, Length, IsNumber } from "class-validator";

export class CreateProfileDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  userid: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  building: string = 'Nil';

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  place: string = 'Nil';

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(6, 6)
  pincode: string = 'Nil';

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(10, 10)
  phone: string = 'Nil';
}
