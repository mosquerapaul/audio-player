import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerStateService, PlayerState } from '../services/player-state.service';
import { Observable, Subscription } from 'rxjs';
import { AudioElement, PlayListService } from '../services/play-list.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-play-list',
  animations: [
    trigger('show-hide', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s 2s', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('0.5s 1s', style({
          opacity: 0
        }))
      ]),
    ]),
  ],
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})



export class PlayListComponent implements OnInit, OnDestroy {

  stateService: PlayerStateService;
  playerState$: Observable<PlayerState>;
  playerState: PlayerState;

  playListService: PlayListService;
  playList: AudioElement[] = [];
  playList$: Observable<AudioElement[]>;

  playListSubscription: Subscription;
  playerStateSubscription: Subscription;

  constructor(stateService: PlayerStateService, playListService: PlayListService) {
    this.stateService = stateService;
    this.playListService = playListService;
  }

  ngOnInit() {
    this.playerState$ = this.stateService.getState();
    this.playerStateSubscription = this.playerState$.subscribe(state => {
      this.playerState = state;
      // this.playList = this.playerState.playList;
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
