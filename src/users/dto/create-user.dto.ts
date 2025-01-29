import { IsDefined, IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsDefined()
    @IsString()
    @MinLength(3,{message:"Name should have minimum 3 letters"})
    user_name:string;

   

    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsDefined()
    @IsString()
    @MinLength(8,{message:"Password should have minimum 3 letters"})
    password:string;
}
