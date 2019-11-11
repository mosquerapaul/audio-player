import { Component, OnInit } from '@angular/core';
import { PlayerState, PlayerStateService } from '../player-state.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  audioPlayer;
  playerState: PlayerState;

  constructor(playerState: PlayerStateService) {
    this.playerState = playerState._playerState$.value;
    let currentAudio = playerState._playerState$.value.currentAudio;
    this.audioPlayer = new Audio(playerState._playerState$.value.playList[currentAudio].sourceURL);
  }

  play() {
    this.audioPlayer.play();
  }

  pause() {
    this.audioPlayer.pause();
  }

  next() {
    console.log('Next called...');
  }

  prev() {
    console.log('Prev called...');
  }

  ngOnInit() {
  }

}
