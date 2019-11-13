import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AudioPlayerModule } from '../audio-player.module';


export interface AudioElement {
  sourceURL: string;
  duration: number;
  audioTitle: string;
}

export interface PlayerState {
  controlList: Control[];
  currentAudio: number;
  currentTime: number;
  audioTitle: string;
  isPlaying: boolean;
}

export interface Control {
  name: string;
  materialIcon: string;
}

const staticControls: Control[] = [
  {name: 'step-backward', materialIcon: 'skip_previous'},
  {name: 'play', materialIcon: 'play_circle_outline'},
  {name: 'pause', materialIcon: 'pause_circle_outline'},
  {name: 'step-forward', materialIcon: 'skip_next'}
];

@Injectable({
  providedIn: 'root'
})

export class PlayerStateService {

  _playerState$: BehaviorSubject<PlayerState>;

  constructor() {
    this._playerState$ = new BehaviorSubject ({
      controlList: staticControls,
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

  playingAudio(index: number, title: string) {
    if (!index) {
      index = 0;
    }
    this.playerState.currentAudio = index;
    this.playerState.currentTime = 0;
    this.playerState.audioTitle = title;
  }

}
