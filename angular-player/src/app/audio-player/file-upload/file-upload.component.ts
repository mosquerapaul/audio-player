import { Component, OnInit, Inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AudioElement } from '../model/model-interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('inputFile', {static: false}) inputFile: ElementRef;

  loading: boolean;

  audio: AudioElement;

  fileData: any;

  constructor(
        private renderer: Renderer2,
        public dialogRef: MatDialogRef<FileUploadComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    this.audio = {
      sourceURL : '',
      duration : 0,
      audioTitle : '',
      artist : '',
      credits : ''
    };
  }

  chooseFile() {
    this.renderer.selectRootElement(this.inputFile.nativeElement).click();
  }

  fileUpdated() {
    this.audio.sourceURL = this.renderer.selectRootElement(this.inputFile.nativeElement).files[0].name;
  }

  onSubmit(formValue) {
    console.log('submit called');
    this.loading = true;
    console.log('Form content', formValue);
    console.log(this.renderer.selectRootElement(this.inputFile.nativeElement).files[0]);
    this.dialogRef.close(this.audio);
  }

  ngOnInit() {
    this.loading = true;

    setTimeout( () => {
      this.loading = false;
    }, 500 );
    console.log('Form Loaded');
  }

}
