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
    this.stateService.playingAudio(index, this.playList[index].audioTitle);
    this.audioPlayer.src = this.playList[index].sourceURL;
    this.audioPlayer.playbackRate = 1;
    this.audioPlayer.play();
    this.playerState.isPlaying = true;
    console.log('PLaying now: ', this.playerState.audioTitle);
  }

  playerPause() {
    this.audioPlayer.pause();
    this.playerState.isPlaying = false;
    this.audioPlayer.playbackRate = 1;
  }

  fforware() {
    console.log('Forware called...');
    this.audioPlayer.playbackRate = 5;
  }

  fbackward() {
    console.log('Backware called...');
    this.audioPlayer.playbackRate = -5;
  }

  stepNext() {
    if(this.playerState.currentAudio === this.playList.length - 1) {
      console.log('Not allowed!! This is the last audio...');
    } else{
      const index = this.playerState.currentAudio + 1;
      this.playerStart(index);
    }
  }

  stepPrev() {
    if(this.playerState.currentAudio === 0) {
      console.log('Not allowed!! This is the first audio...');
    } else{
      const index = this.playerState.currentAudio - 1;
      this.playerStart(index);
    }
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
