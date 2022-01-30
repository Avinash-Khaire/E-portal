import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPictureComponent } from './standard-picture.component';

describe('StandardPictureComponent', () => {
  let component: StandardPictureComponent;
  let fixture: ComponentFixture<StandardPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
