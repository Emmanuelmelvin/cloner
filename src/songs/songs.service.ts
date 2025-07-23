import { Injectable } from '@nestjs/common';
import { CreateSongsRequestDto } from './songs.dto';

@Injectable()
export class SongsService {
    private readonly songs: CreateSongsRequestDto[] = []; 

    create(song: CreateSongsRequestDto){
        this.songs.push(song);
        return song;
    }

    findAll() {
        return this.songs;
    }

    findOne(id: number) {
        return this.songs[id];
    }

    update(id: number, song: any): string {
        this.songs[id] = song;
        return song;
    }

    remove(id: number) {
        const removedSong = this.songs.splice(id, 1);
        return removedSong[0];
    }   
}
