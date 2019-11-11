import { Component, OnInit } from '@angular/core';
import { AudioElement, PlayerStateService, PlayerState } from './../player-state.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})



export class PlayListComponent implements OnInit {

  playList: AudioElement[];

  playerState: PlayerState;

  constructor(playerState: PlayerStateService) {
    this.playerState = playerState.playerState;
    this.playList = playerState._playerState$.value.playList;
    console.log(this.playerState, '\n', this.playList);
  }

  ngOnInit() {
  }

}
