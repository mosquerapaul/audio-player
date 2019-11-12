import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

export interface AudioElement {
  sourceURL: string;
  duration: number;
  audioTitle: string;
}

const staticPlayList: AudioElement[] = [
  {
    sourceURL: './assets/02 Shoot to Thrill.mp3',
    duration: 156,
    audioTitle: 'Shoot to Thrill'
  },
  {
    sourceURL: './assets/03 Back in Black.mp3',
    duration: 230,
    audioTitle: 'Back in Black'
  }
];

@Injectable({
  providedIn: 'root'
})
export class PlayListServiceService {

  playList: AudioElement[];
  playList$: Subject<AudioElement[]>;

  constructor() {
    this.playList$ = new Subject<AudioElement[]>();
    this.updatePlayList(staticPlayList);
  }

  getPlayList(): Observable<AudioElement[]> {
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

}
