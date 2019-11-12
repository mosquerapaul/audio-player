import { Component, OnInit, Input } from '@angular/core';
import { PlayerStateService, PlayerState } from '../services/player-state.service';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {

  playerState: PlayerState;
  @Input() control: string;

  constructor(playerState: PlayerStateService) {
    this.playerState = playerState.playerState;
  }

  _handleClicControls() {
    console.log(this.control);
  }

  ngOnInit() {
  }

}
