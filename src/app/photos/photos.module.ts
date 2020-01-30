import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';

@NgModule({
    declarations: [
        PhotoComponent, 
        PhotosListComponent, 
        PhotosFormComponent, PhotosComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {}