import { ApiProperty } from "@nestjs/swagger";

export abstract class BaseResponseDto<T> {
    
    @ApiProperty()
    status: boolean;

    @ApiProperty()
    message: string;

    @ApiProperty()
    data?: T;

}
