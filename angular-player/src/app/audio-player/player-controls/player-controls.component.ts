import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PlayerStateService, PlayerState, Control } from '../services/player-state.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-player-controls',
  animations: [
    trigger('show-hide', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s 0.5s', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('0.5s 0.5s', style({
          opacity: 0
        }))
      ]),
    ]),
  ],
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit, OnDestroy {

  playerState: PlayerState;
  @Input() control: Control;

  constructor(stateService: PlayerStateService) {
    this.playerState = stateService.playerState;
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
