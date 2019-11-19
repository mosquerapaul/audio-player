import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject, BehaviorSubject } from 'rxjs';

export interface AudioElement {
  sourceURL: string;
  duration: number;
  audioTitle: string;
  artist: string;
}

const staticPlayList: AudioElement[] = [
  {
    sourceURL: './assets/bensound-allthat.mp3',
    duration: 146000,
    audioTitle: 'All that',
    artist: 'Benjamin Tissot'
  },
  {
    sourceURL: './assets/bensound-beyondtheline.mp3',
    duration: 186000,
    audioTitle: 'Beyond the line',
    artist: 'Benjamin Tissot'
  },
  {
    sourceURL: './assets/bensound-happyrock.mp3',
    duration: 105000,
    audioTitle: 'Happy rock',
    artist: 'Benjamin Tissot'
  },
  {
    sourceURL: './assets/bensound-highoctane.mp3',
    duration: 155000,
    audioTitle: 'High Octane',
    artist: 'Benjamin Tissot'
  },
  {
    sourceURL: './assets/bensound-hipjazz.mp3',
    duration: 164000,
    audioTitle: 'Hip Jazz',
    artist: 'Benjamin Tissot'
  },
  {
    sourceURL: './assets/bensound-jazzcomedy.mp3',
    duration: 193000,
    audioTitle: 'Jazz Comedy',
    artist: 'Benjamin Tissot'
  },
  {
    sourceURL: './assets/bensound-punky.mp3',
    duration: 126000,
    audioTitle: 'Punky',
    artist: 'Benjamin Tissot'
  },
  {
    sourceURL: './assets/bensound-rumble.mp3',
    duration: 154000,
    audioTitle: 'Rumble',
    artist: 'Benjamin Tissot'
  }
];

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  playList: AudioElement[];
  playList$: BehaviorSubject<AudioElement[]>;

  constructor() {
    this.playList$ = new BehaviorSubject<AudioElement[]>([]);
    this.updatePlayList(staticPlayList);
  }

  getPlayList$(): Observable<AudioElement[]> {
    return this.playList$.asObservable();
  }

  updatePlayList(newPlayList: AudioElement[]) {
    this.playList = newPlayList;
    this.playList$.next(this.playList);
  }

  addAudio(audio: AudioElement) {
    this.playList.push(audio);
    this.playList$.next(this.playList);
  }

  getAudio(index: number) {
    return this.playList$[index];
  }

}
