import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerState, AudioElement } from './../model/model-interface';
import { PlayListService } from './../services/play-list.service';
import { PlayerStateService } from './../services/player-state.service';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { FileUploadComponent } from '../file-upload/file-upload.component';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, OnDestroy {

  stateService: PlayerStateService;
  playerState$: Observable<PlayerState>;
  playerState: PlayerState;

  playListService: PlayListService;
  playList: AudioElement[] = [];
  playList$: Observable<AudioElement[]>;

  playListSubscription: Subscription;
  playerStateSubscription: Subscription;

  constructor(playerStateService: PlayerStateService, playListService: PlayListService, public dialog: MatDialog) {
    this.stateService = playerStateService;
    this.playListService = playListService;
  }

  fileUpload() {
    const dialogRef = this.dialog.open(FileUploadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  playerPlay(index: number) {
    if (!index) {
      index = 0;
    }
    const isPlayStarted = this.playerState.currentTime > 0;
    if (!isPlayStarted) {
      this.playerReady(index);
    }
    if (index !== this.playerState.currentAudio) {
      this.stateService.updateCurrentAudio(this.playList[index], index);
    }
    // Start playing
    this.stateService.playAudio();
  }

  playerPause() {
    this.stateService.playerPause();

  }

  stepNext() {
    if (this.playerState.currentAudio === this.playList.length - 1) {
      this.playerState.isLastAudio = true;
      console.log('Not allowed!! This is the last audio...');
    } else {
      this.playerState.currentAudio = this.playerState.currentAudio === null ? -1 : this.playerState.currentAudio;
      const newIndex = this.playerState.currentAudio + 1;
      this.playerState.isLastAudio = this.stateService.checkLastAudio(newIndex, this.playList.length - 1);
      this.stateService.updateCurrentAudio(this.playList[newIndex], newIndex);
      if (this.playerState.isPlaying) {
        this.playerPlay(newIndex);
      }
    }
  }

  stepPrev() {
    if (this.playerState.currentAudio === 0) {
      console.log('Not allowed!! This is the first audio...');
    } else {
      const newIndex = this.playerState.currentAudio - 1;
      if (this.playerState.isPlaying) {
        this.playerPlay(newIndex);
      } else {
        this.stateService.updateCurrentAudio(this.playList[newIndex], newIndex);
        this.playerState.isLastAudio = this.stateService.checkLastAudio(newIndex, this.playList.length - 1);
      }
    }
  }

  handleClickControl(control: string) {
    switch (control) {
      case 'play':
        if (this.playerState.isPlaying) { break; }
        this.playerPlay(this.playerState.currentAudio);
        break;
      case 'pause':
        if (!this.playerState.isPlaying) { break; }
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

  playerReady(index) {
    this.stateService.initPlayer();
    this.stateService.updateCurrentAudio(this.playList[index], index);
    this.playerState.isLastAudio = index === this.playList.length - 1;
  }

  ngOnInit() {
    this.playerState$ = this.stateService.getState();
    this.playerStateSubscription = this.playerState$.subscribe(state => {
      if (this.playerState) {
        if (this.playerState.isPlaying) {
          this.stateService.updateCurrentAudio(this.playList[this.playerState.currentAudio], this.playerState.currentAudio);
          this.stateService.playAudio();
        }
      }
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
