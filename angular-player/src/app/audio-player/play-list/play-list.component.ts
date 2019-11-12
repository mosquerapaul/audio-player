import { Component, OnInit } from '@angular/core';
import { PlayerStateService, PlayerState } from '../services/player-state.service';
import { Observable } from 'rxjs';
import { AudioElement, PlayListServiceService } from '../services/play-list-service.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})



export class PlayListComponent implements OnInit {

  stateService: PlayerStateService;
  playerState$: Observable<PlayerState>;
  playerState: PlayerState;

  playListService: PlayListServiceService;
  playList: AudioElement[] = [];
  playList$: Observable<AudioElement[]>;

  constructor(stateService: PlayerStateService, playListService: PlayListServiceService) {
    this.stateService = stateService;
    this.playListService = playListService;
  }

  ngOnInit() {
    this.playerState$ = this.stateService.getState();
    this.playerState$.subscribe(state => {
      this.playerState = state;
      //this.playList = this.playerState.playList;
    });

    this.playList$ = this.playListService.getPlayList();
    this.playList$.subscribe(list => {
      this.playList = list;
    });
  }

}
