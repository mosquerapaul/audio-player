import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerState, PlayerStateService, AudioElement } from '../services/player-state.service';
import { PlayListService } from '../services/play-list.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, OnDestroy {

  private audioPlayer = new Audio();

  stateService: PlayerStateService;
  playerState$: Observable<PlayerState>;
  playerState: PlayerState;

  playListService: PlayListService;
  playList: AudioElement[] = [];
  playList$: Observable<AudioElement[]>;

  playListSubscription: Subscription;
  playerStateSubscription: Subscription;

  constructor(playerStateService: PlayerStateService, playListService: PlayListService) {
    this.stateService = playerStateService;
    this.playListService = playListService;
  }



  playerStart(index: number) {
    if (!index) {
      index = 0;
    }
    this.playerState.audioTitle = this.playList[index].audioTitle;
    this.stateService.playerState.currentAudio = index;
    this.audioPlayer.src = this.playList[index].sourceURL;
    // Needs to update playing info
    this.audioPlayer.play();
    this.playerState.isPlaying = true;
    console.log('PLaying now: ', this.playerState.audioTitle);
  }

  playerPause() {
    this.audioPlayer.pause();
    this.playerState.isPlaying = false;
  }

  fforware() {
    console.log('Forware called...');
  }

  fbackward() {
    console.log('Backware called...');
  }

  stepNext() {
    // this.stateService.stateNextAudio();
    console.log(this.playerState.currentAudio);


    this.playerStart(this.stateService.playerState$.value.currentAudio);
    console.log('Next called...');
    console.log(this.playerState.currentAudio, this.playerState.audioTitle);
  }

  stepPrev() {
    console.log('Prev called...');
  }

  timeUpdate() {
    console.log(this.playerState.currentTime, this.audioPlayer);
    this.stateService.updateCurrentTime(this.audioPlayer.currentTime);
  }

  handleClickControl(control: string) {
    switch (control) {
      case 'play':
        if (!this.playerState.isPlaying) {
          this.playerStart(this.playerState.currentAudio);
        }
        break;
      case 'pause':
        this.playerPause();
        break;
      case 'step-forward':
        this.stepNext();
        break;
      case 'step-backward':
        this.stepPrev();
        break;
      case 'backward':
        this.fbackward();
        break;
      case 'forward':
        this.fforware();
        break;
    }
  }

  ngOnInit() {
    this.playerState$ = this.stateService.getState();
    this.playerStateSubscription = this.playerState$.subscribe(state => {
      this.playerState = state;
    });

    this.playList$ = this.playListService.getPlayList$();
    this.playListSubscription = this.playList$.subscribe(list => {
      this.playList = list;
    });
  }

  ngOnDestroy() {
    this.playListSubscription.unsubscribe();
    this.playerStateSubscription.unsubscribe();
  }

}
