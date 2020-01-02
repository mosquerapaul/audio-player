import { Component, OnInit, Inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AudioElement } from '../model/model-interface';
import { MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('inputFile', {static: false}) inputFile: ElementRef;

  loading: boolean;

  sourceURL: string;
  duration: number;
  audioTitle: string;
  artist: string;
  credits: string;

  constructor(private renderer: Renderer2, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.sourceURL = '';
    this.duration = 0;
    this.audioTitle = '';
    this.artist = '';
    this.credits = '';
  }

  chooseFile() {
    this.renderer.selectRootElement(this.inputFile.nativeElement).click();
  }

  onSubmit() {
    this.loading = true;
    console.log('Form submited');
  }

  ngOnInit() {
    this.loading = true;

    setTimeout( () => {
      this.loading = false;
    }, 500 );
    console.log('Form Loaded');
  }

}
