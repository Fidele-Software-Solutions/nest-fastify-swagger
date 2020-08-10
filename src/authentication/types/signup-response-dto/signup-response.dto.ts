import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "../base-response-dto/base-response.dto";


export class SignupResponseDto implements BaseResponseDto<any> {

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    message: string;
    
}
