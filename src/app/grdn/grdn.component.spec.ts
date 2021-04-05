import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrdnComponent } from './grdn.component';

describe('GrdnComponent', () => {
  let component: GrdnComponent;
  let fixture: ComponentFixture<GrdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrdnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
