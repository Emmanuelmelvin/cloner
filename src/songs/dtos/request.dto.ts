import { 
    IsString, 
    IsNotEmpty, 
    IsArray, 
    IsDateString, 
    IsMilitaryTime
} from "class-validator";

export class CreateSongsDto {

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