import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishDesignComponent } from './stylish-design.component';

describe('StylishDesignComponent', () => {
  let component: StylishDesignComponent;
  let fixture: ComponentFixture<StylishDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylishDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
