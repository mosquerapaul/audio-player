import { Component, OnInit } from '@angular/core';
import { AudioElement, PlayerStateService, PlayerState } from '../services/player-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})



export class PlayListComponent implements OnInit {

  stateService: PlayerStateService;
  playerState$: Observable<PlayerState>;
  playerState: PlayerState;

  playList: AudioElement[];

  constructor(stateService: PlayerStateService) {
    this.stateService = stateService;
  }

  ngOnInit() {
    this.playerState$ = this.stateService.getState();
    this.playerState$.subscribe(state => {
      this.playerState = state;
      this.playList = this.playerState.playList;
    });
  }

}
