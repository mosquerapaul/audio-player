import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AudioElement, PlayerState, Control } from './../model/model-interface';


const staticControls: Control[] = [
  {name: 'step-backward', materialIcon: 'skip_previous'},
  {name: 'play', materialIcon: 'play_circle_outline'},
  {name: 'pause', materialIcon: 'pause_circle_outline'},
  {name: 'step-forward', materialIcon: 'skip_next'}
];

function updateProgress(currentTime: number, duration: number) {
  return 100 * currentTime / duration;
}

@Injectable({
  providedIn: 'root'
})

export class PlayerStateService {

  private audioPlayerElement = new Audio();

  _playerState$: BehaviorSubject<PlayerState>;

  constructor() {
    this._playerState$ = new BehaviorSubject ({
      controlList: staticControls,
      currentAudio: null,
      currentTime: 0,
      duration: 0,
      progress: 0,
      audioTitle: '... Nothing is playing right now ...',
      isPlaying: false,
      isLastAudio: undefined
    });

    this.initPlayer();


    // Listening to current time changes
    this.audioPlayerElement.addEventListener('timeupdate', (event) => {
      this.timeUpdate();
    });
    // Listening to audio end
    this.audioPlayerElement.addEventListener('ended', (event) => {
      this.playerState.currentAudio++;
      this._playerState$.next(this.playerState); // If audio ends player steps into next audio
    });
  }


  /****************************************************
   *             MANAGE THE STATE
   ****************************************************/

  get playerState$(): BehaviorSubject<PlayerState> {
    return this._playerState$;
  }

  get playerState(): PlayerState {
    return this._playerState$.getValue();
  }

  set playerState(newState: PlayerState) {
    this._playerState$.next(newState);
  }

  getState(): Observable<PlayerState> {
    return this._playerState$.asObservable();
  }

  getCurrentAudio(): number {
    return this._playerState$.value.currentAudio;
  }


  clearState() {
    this.playerState = {
      controlList: staticControls,
      currentAudio: null,
      currentTime: 0,
      duration: 0,
      progress: 0,
      audioTitle: '... Nothing is playing right now ...',
      isPlaying: false,
      isLastAudio: undefined
    };
  }


  /****************************************************
   *             UPDATING DE STATE CHANGES
   ****************************************************/

  timeUpdate() {
    this.playerState.currentTime = this.audioPlayerElement.currentTime * 1000;
    this.playerState.duration = this.audioPlayerElement.duration * 1000;
    this.playerState.progress = updateProgress(this.audioPlayerElement.currentTime, this.audioPlayerElement.duration);
  }

  updateCurrentTime(newTime: number) {
    this._playerState$.value.currentTime = newTime * 1000;
  }
  updateCurrentAudio(audio: AudioElement, newIndex) {
    this.playerState.currentAudio = newIndex;
    this.playerState.audioTitle = audio.audioTitle;
    this.playerState.duration = audio.duration;
    this.playerState.currentTime = 0;
    this.audioPlayerElement.src = audio.sourceURL;
    this.audioPlayerElement.load();
  }


  /****************************************************
   *             PLAYER FUNCTIONS
   ****************************************************/

  initPlayer() {
    this.audioPlayerElement.playbackRate = 1;
    this.audioPlayerElement.volume = 0.3;
  }

  playAudio() {
    console.log('PLaying now: ', this.playerState.audioTitle);
    this.audioPlayerElement.play();
    this.playerState.isPlaying = true;
  }

  playerPause() {
    this.playerState.isPlaying = false;
    this.audioPlayerElement.pause();
    this.audioPlayerElement.playbackRate = 1;
  }

}
