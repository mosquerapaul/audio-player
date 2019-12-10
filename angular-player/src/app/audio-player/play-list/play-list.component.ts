import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerStateService } from './../services/player-state.service';
import { PlayerState } from './../model/model-interface';
import { Observable, Subscription } from 'rxjs';
import { PlayListService } from '../services/play-list.service';
import { AudioElement } from './../model/model-interface';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-play-list',
  animations: [
    trigger('audioPlayList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.8s', style({ opacity: 1 }))
          ])
        ])
      ])
    ]),
    trigger('activeAudio', [
      state('true', style({
        backgroundColor: '#9c27b033'
      })),
      state('false', style({
        backgroundColor: 'inherit'
      })),
      transition('* => true', [
        style({
          backgroundColor: 'inherit'
        }),
        animate('0.5s 0.5s', style({
          backgroundColor: '#9c27b033'
        }))
      ]),
      transition('* => false', [
        style({
          backgroundColor: '#9c27b033'
        }),
        animate('0.5s 0.5s', style({
          backgroundColor: 'inherit'
        }))
      ]),
    ])
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

  playAudio(index: number) {
    const audioToPlay = this.playList[index];
    this.stateService.updateCurrentAudio(audioToPlay, index);
    this.stateService.playAudio();
  }
  editAudio(index: number) {console.log('trying to edit audio', index)}
  deleteAudio(index: number) {console.log('trying to delete audio', index)}

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
