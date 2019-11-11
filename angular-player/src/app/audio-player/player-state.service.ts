import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AudioPlayerModule } from './audio-player.module';


export interface AudioElement {
  sourceURL: string;
  duration: number;
  audioTitle: string;
}

export interface PlayerState {
  playList: AudioElement[];
  controlList: string[];
  currentAudio: number;
  currentTime: number;
  audioTitle: string;
  isPlaying: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class PlayerStateService {

  _playerState$: BehaviorSubject<PlayerState>;

  constructor() {
    this._playerState$ = new BehaviorSubject ({
      playList: [],
      controlList: [
        'step-backward',
        'backward',
        'play',
        'pause',
        'forward',
        'step-forward'
      ],
      currentAudio: 0,
      currentTime: 0,
      audioTitle: '... Nothing is playing right now ...',
      isPlaying: false
    });
    this._playerState$.value.playList = this.getPlayList();
  }

  get playerState$(): BehaviorSubject<PlayerState> {
    return this._playerState$;
  }

  get playerState(): PlayerState {
    return this._playerState$.getValue();
  }

  set playerState(newState: PlayerState) {
    this._playerState$.next(newState);
  }

  updateCurrentTime(newTime: number) {
    this.playerState.currentTime = newTime;
  }

  getPlayList() {
    console.log('Returning an static list for develop purposes...');
    return [
      {
        sourceURL: './assets/mp3.mp3',
        duration: 156,
        audioTitle: 'Waiting for the sun'
      },
      {
        sourceURL: './assets/mp3.mp3',
        duration: 230,
        audioTitle: 'audio'
      }
    ];
  }

  playAudio(index: number) {
    if (!index) {
      index = 0;
    }
    this.playerState.currentAudio = index;
    this.playerState.currentTime = 0;
    this.playerState.audioTitle = this.playerState.playList[index].audioTitle;
  }

  nextAudio() {
    if (this.playerState.currentAudio === this.playerState.playList.length - 1) {
      alert('Playlist end!!! Player stop');
      this.playerState.isPlaying = false;
    } else {
      this.playAudio(this.playerState.currentAudio + 1);
    }
  }

  prevAudio() {
    if (this.playerState.currentAudio === 0) {
      alert('Playlist end!!! Player stop');
      this.playerState.isPlaying = false;
    } else {
      this.playAudio(this.playerState.currentAudio - 1);
    }
  }

}
