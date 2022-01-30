import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEffectsComponent } from './tab-effects.component';

describe('TabEffectsComponent', () => {
  let component: TabEffectsComponent;
  let fixture: ComponentFixture<TabEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
