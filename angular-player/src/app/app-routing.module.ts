import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './audio-player/file-upload/file-upload.component';
import { AudioPlayerComponent } from './audio-player/audio-player/audio-player.component';


const routes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'player', component: AudioPlayerComponent },
  { path: '**', redirectTo: '/player' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
