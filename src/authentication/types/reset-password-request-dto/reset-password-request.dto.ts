import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordRequestDto {
    @ApiProperty()
    email: string;
}
