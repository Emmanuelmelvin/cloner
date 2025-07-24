import { 
    Controller,
    Get, 
    Post,
    Delete, 
    Put, 
    Body,
    Query,
    Param,
    NotFoundException,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsRequestDto, CreateSongsResponseDto } from  './songs.dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    @Post()
    create(
        @Body() 
        song: CreateSongsRequestDto
    ): CreateSongsResponseDto {
       const addedSong = this.songsService.create(song);
        return new CreateSongsResponseDto(
            'Song created successfully',
            [addedSong],
            201
        );
    }

    @Get()
    findAll(): CreateSongsResponseDto {
        const songs = this.songsService.findAll();

        if (songs.length === 0) {
            return new CreateSongsResponseDto(
                'No songs found', 
                [],
                404
            );
        }

        return new CreateSongsResponseDto(
            'Songs retrieved successfully',
            songs,
            200
        );
    }

    @Get(':id')
    findOne( 
        @Param('id')
        index: number) {
        
        let song: CreateSongsRequestDto;

        try{
            song = this.songsService.findOne(index);
            if (!song) {
                throw new NotFoundException('Song not found');
            }
        } catch (error) {
            throw new  NotFoundException('Song not found');
        }
        return new CreateSongsResponseDto(
            'Song retrieved successfully',
            [this.songsService.findOne(index)],
            200
        );
    }

    @Put(':id')
    update(index: number, song: string): string {  
        this.songsService.update(index, song);
        return 'This action updates a song';
    }   

    @Delete(':id')
    remove(index: number): string {  
        this.songsService.remove(index);
        return 'This action removes a song';
    }
}
