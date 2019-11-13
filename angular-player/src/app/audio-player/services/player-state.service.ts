import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AudioPlayerModule } from '../audio-player.module';


export interface AudioElement {
  sourceURL: string;
  duration: number;
  audioTitle: string;
}

export interface PlayerState {
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
    this._playerState$.value.currentTime = newTime;
  }

  getCurrentAudio(): number {
    return this._playerState$.value.currentAudio;
  }

  updateCurrentAudio(audio: AudioElement, currentAudio) {
    this._playerState$.value.currentAudio = currentAudio;
    this._playerState$.value.audioTitle = audio.audioTitle;
    this._playerState$.value.currentTime = 0;
  }

  getState(): Observable<PlayerState> {
    return this._playerState$.asObservable();
  }

  playAudio(index: number, title: string) {
    if (!index) {
      index = 0;
    }
    this.playerState.currentAudio = index;
    this.playerState.currentTime = 0;
    this.playerState.audioTitle = title;
  }

  nextAudio(title: string) {
    this.playAudio(this.playerState.currentAudio + 1, title);
  }

  prevAudio(title: string) {
    this.playAudio(this.playerState.currentAudio - 1, title);
  }

}
