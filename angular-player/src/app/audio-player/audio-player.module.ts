import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { PlayerControlsComponent } from './player-controls/player-controls.component';
import { PlayListComponent } from './play-list/play-list.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [AudioPlayerComponent, PlayerControlsComponent, PlayListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AudioPlayerComponent
  ]
})
export class AudioPlayerModule { }
