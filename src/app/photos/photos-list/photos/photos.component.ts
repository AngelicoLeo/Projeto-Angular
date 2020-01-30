import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  constructor() { }

  @Input()photos: any[] = [];
  rows: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos){
     this.rows = this.groupColumns(this.photos);
     
    }
  }

  groupColumns(photos:any[]){
    const newRows = [];

    for(let i = 0; i<photos.length; i+3){
      newRows.push(photos.slice(i, i + 3));
    }
    return newRows;
  }
}
