import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AudioElement } from './../model/model-interface';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'Content-Type: audio/mpeg'
  })
};

const staticPlayList: AudioElement[] = [
  {
    sourceURL: './assets/bensound-allthat.mp3',
    duration: 146000,
    audioTitle: 'All that',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  },
  {
    sourceURL: './assets/bensound-beyondtheline.mp3',
    duration: 186000,
    audioTitle: 'Beyond the line',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  },
  {
    sourceURL: './assets/bensound-happyrock.mp3',
    duration: 105000,
    audioTitle: 'Happy rock',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  },
  {
    sourceURL: './assets/bensound-highoctane.mp3',
    duration: 155000,
    audioTitle: 'High Octane',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  },
  {
    sourceURL: './assets/bensound-hipjazz.mp3',
    duration: 164000,
    audioTitle: 'Hip Jazz',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  },
  {
    sourceURL: './assets/bensound-jazzcomedy.mp3',
    duration: 193000,
    audioTitle: 'Jazz Comedy',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  },
  {
    sourceURL: './assets/bensound-punky.mp3',
    duration: 126000,
    audioTitle: 'Punky',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  },
  {
    sourceURL: './assets/bensound-rumble.mp3',
    duration: 154000,
    audioTitle: 'Rumble',
    artist: 'Benjamin Tissot',
    credits: 'Music from www.bensound.com'
  }
];

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  playList: AudioElement[];
  playList$: BehaviorSubject<AudioElement[]>;

  constructor(private http: HttpClient) {
    this.playList$ = new BehaviorSubject<AudioElement[]>([]);
    this.updatePlayList(staticPlayList);
  }

  getPlayList$(): Observable<AudioElement[]> {
    return this.playList$.asObservable();
  }

  updatePlayList(newPlayList: AudioElement[]) {
    this.playList = newPlayList;
    this.playList$.next(this.playList);
  }

  addAudio(audio: AudioElement) {
    this.playList.push(audio);
    this.playList$.next(this.playList);
  }

  getAudio(index: number) {
    return this.playList$[index];
  }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = './audioupload';
    const formData: FormData = new FormData();
    console.log('File upload send');
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData, { headers: httpOptions.headers })
      .pipe(map(() => {
        console.log('File upload SUCESS');
        return true;
      }));
  }

}
