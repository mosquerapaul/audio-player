import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { PlayerState, PlayerStateService, AudioElement } from '../services/player-state.service';



@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  private audioPlayer;
  playerState: PlayerState;
  stateService: PlayerStateService;

  constructor(playerStateService: PlayerStateService) {
    this.stateService = playerStateService;
    this.playerState = playerStateService.playerState;
    let currentAudio = playerStateService.playerState.currentAudio;
    this.audioPlayer = new Audio(playerStateService.playerState.playList[currentAudio].sourceURL);
    this.audioPlayer.addEventListener('timeupdate', (e) => {
      console.log(e.path["0"].currentTime, );
      this.stateService.updateCurrentTime(this.audioPlayer.currenTime);
     });
  }



  playerStart(index: number) {
    if (!index) {
      index = 0;
    }
    this.playerState.audioTitle = this.playerState.playList[index].audioTitle;
    this.stateService.playerState.currentAudio = index;
    this.audioPlayer.src = this.stateService.playerState$.value.playList[index].sourceURL;
    //Needs to update playing info
    this.audioPlayer.play();
    this.playerState.isPlaying = true;
    console.log(this.playerState.audioTitle);
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
    //this.stateService.stateNextAudio();
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
    this.stateService.updateCurrentTime(this.audioPlayer.currenTime);
  }

  handleClickControl(control: string) {
    switch (control) {
      case 'play':
        if (!this.playerState.isPlaying){
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
  }

}
