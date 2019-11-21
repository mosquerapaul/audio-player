import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface AudioElement {
  sourceURL: string;
  duration: number;
  audioTitle: string;
}

export interface PlayerState {
  controlList: Control[];
  currentAudio: number;
  currentTime: number;
  duration: number;
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
      currentAudio: null,
      currentTime: 0,
      duration: 0,
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
    this._playerState$.value.duration = audio.duration;
  }

  getState(): Observable<PlayerState> {
    return this._playerState$.asObservable();
  }

}
