import { ApiProperty } from "@nestjs/swagger";

export class IAuthorization {
    
    @ApiProperty()
    authorization: string;
}