import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycmComponent } from './mycm.component';

describe('MycmComponent', () => {
  let component: MycmComponent;
  let fixture: ComponentFixture<MycmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
