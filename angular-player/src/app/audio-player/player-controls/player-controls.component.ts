import { Component, OnInit, Input } from '@angular/core';
import { PlayerStateService, PlayerState } from './../services/player-state.service';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {

  stateService: PlayerState;
  @Input() control: string;

  constructor(stateService: PlayerStateService) {
    this.stateService = stateService.playerState;
  }

  ngOnInit() {
  }

}
