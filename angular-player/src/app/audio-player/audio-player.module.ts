import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { PlayerControlsComponent } from './player-controls/player-controls.component';
import { PlayListComponent } from './play-list/play-list.component';



@NgModule({
  declarations: [AudioPlayerComponent, PlayerControlsComponent, PlayListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AudioPlayerComponent
  ]
})
export class AudioPlayerModule { }
