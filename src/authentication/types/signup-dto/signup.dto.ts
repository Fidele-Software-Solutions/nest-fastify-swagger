import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SignupDto {

    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsString()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    readonly middleName: string;

    @ApiProperty()
    @IsString()
    readonly lastName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6, {
        message: 'Your password must be at least 6 characters length',
    })
    @MaxLength(32, {
        message: 'Your password cannot exceed 32 characters',
    })
    readonly password: string;
    
}
