import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosFormComponent } from './photo-form.component';

describe('PhotoFormComponent', () => {
  let component: PhotosFormComponent;
  let fixture: ComponentFixture<PhotosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
