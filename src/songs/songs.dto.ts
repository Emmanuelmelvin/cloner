import { 
    IsString, 
    IsNotEmpty, 
    IsArray, 
    IsDateString, 
    IsMilitaryTime,
    IsNumber
} from "class-validator";

export class CreateSongsRequestDto {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration: Date;

}

export class CreateSongsResponseDto  {
    @IsString()
    @IsNotEmpty()
    readonly message: string;

    @IsNotEmpty()
    @IsArray()
    readonly data: CreateSongsRequestDto[];

    @IsNotEmpty()
    @IsNumber()
    readonly statusCode: number = 201;

    constructor(message: string, song: CreateSongsRequestDto[], statusCode: number) {
        this.message = message;
        this.data = song;
        this.statusCode = statusCode;
    }
}