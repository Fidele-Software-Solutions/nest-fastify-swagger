import { ApiProperty } from "@nestjs/swagger";

export class RequestResponseDto<T> {

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    message: string;

    @ApiProperty()
    data: T;

}
