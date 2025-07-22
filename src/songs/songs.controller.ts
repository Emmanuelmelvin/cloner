import { 
    Controller,
    Get, 
    Post,
    Delete, 
    Put, 
    Body
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDto } from './dtos/request.dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    @Post()
    create(
        @Body() 
        song: CreateSongsDto
    ): string {
        this.songsService.create(song);
        return 'Song created successfully!';
    }

    @Get()
    findAll(): CreateSongsDto[] {
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(index: number): string {
        this.songsService.findOne(index);
        return 'This action returns a single song';
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
