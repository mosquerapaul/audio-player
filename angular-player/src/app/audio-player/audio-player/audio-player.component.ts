import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerState, PlayerStateService, AudioElement } from './../services/player-state.service';
import { PlayListService } from './../services/play-list.service';
import { Observable, Subscription } from 'rxjs';
import { formatDate } from '@angular/common';



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
    this.audioPlayer.addEventListener('timeupdate', (event) => {
      this.updateCurrentTime();
    });
  }

  getProgress() {
    return 100 * this.playerState.currentTime / this.playerState.duration;
  }

  updateCurrentTime() {
    this.stateService.updateCurrentTime(this.audioPlayer.currentTime);
    return this.playerState.currentTime ?
      formatDate(this.playerState.currentTime, 'mm:ss', 'en-US') :
      '--:--';
  }

  playerStart(index: number) {
    if (!index) {
      index = 0;
    }

    // Listening to audio end
    this.audioPlayer.addEventListener('ended', (event) => {
      this.stepNext(); // If audio ends player steps into next audio
    });

    // If the audio isn't started then init playback rate and volume
    const isPlayStarted = this.audioPlayer.currentTime > 0;
    if (!isPlayStarted) {
      this.initPlayer(index);
    }

    // Start playing
    this.playerState.isPlaying = true;
    this.audioPlayer.play();
    console.log('PLaying now: ', this.playerState.audioTitle);
  }

  playerPause() {
    this.playerState.isPlaying = false;
    this.audioPlayer.pause();
    this.audioPlayer.playbackRate = 1;
    this.audioPlayer.removeEventListener('ended', (event) => {
      console.log('Not listening to end of reproduction');
    });
  }

  stepNext() {
    if (this.playerState.currentAudio === this.playList.length - 1) {
      console.log('Not allowed!! This is the last audio...');
    } else {
      this.playerState.currentAudio = this.playerState.currentAudio === null ? -1 : this.playerState.currentAudio;
      const index = this.playerState.currentAudio + 1;
      this.stateService.updateCurrentAudio(this.playList[index], index);
      this.audioPlayer.src = this.playList[index].sourceURL;
      if (this.playerState.isPlaying) {
        this.playerStart(index);
      }
    }
  }

  stepPrev() {
    if (this.playerState.currentAudio === 0) {
      console.log('Not allowed!! This is the first audio...');
    } else {
      const index = this.playerState.currentAudio - 1;
      if (this.playerState.isPlaying) {
        this.playerStart(index);
      } else {
        this.stateService.updateCurrentAudio(this.playList[index], index);
        this.audioPlayer.src = this.playList[index].sourceURL;
      }
    }
  }

  timeUpdate() {
    console.log(this.playerState.currentTime, this.audioPlayer);
    this.stateService.updateCurrentTime(this.audioPlayer.currentTime);
  }

  handleClickControl(control: string) {
    switch (control) {
      case 'play':
        if (this.playerState.isPlaying) {
          break;
        }
        this.playerStart(this.playerState.currentAudio);
        break;
      case 'pause':
        if (!this.playerState.isPlaying) {
          break;
        }
        this.playerPause();
        break;
      case 'step-forward':
        this.stepNext();
        break;
      case 'step-backward':
        this.stepPrev();
        break;
    }
  }

  initPlayer(index) {
    this.audioPlayer.playbackRate = 1;
    this.audioPlayer.volume = 0.3;
    this.stateService.updateCurrentAudio(this.playList[index], index);
    this.audioPlayer.src = this.playList[index].sourceURL;
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
