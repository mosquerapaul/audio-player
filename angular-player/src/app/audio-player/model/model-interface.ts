export interface AudioElement {
  sourceURL: string;
  duration: number;
  audioTitle: string;
  artist: string;
  credits: string;
}

export interface PlayerState {
  controlList: Control[];
  currentAudio: number;
  currentTime: number;
  duration: number;
  progress: number;
  audioTitle: string;
  isPlaying: boolean;
}

export interface Control {
  name: string;
  materialIcon: string;
}
