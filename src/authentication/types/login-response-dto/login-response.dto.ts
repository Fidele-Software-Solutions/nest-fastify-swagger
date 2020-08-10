import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "../base-response-dto/base-response.dto";
import { IAuthorization } from "../iauthorization/iauthorization";


export class LoginResponseDto implements BaseResponseDto<IAuthorization> {
    
    @ApiProperty()
    status: boolean;
    
    @ApiProperty()
    message: string;

    @ApiProperty({type: () => IAuthorization})
    data: IAuthorization;

}
