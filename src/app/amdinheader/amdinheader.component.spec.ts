import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdinheaderComponent } from './amdinheader.component';

describe('AmdinheaderComponent', () => {
  let component: AmdinheaderComponent;
  let fixture: ComponentFixture<AmdinheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmdinheaderComponent]
    });
    fixture = TestBed.createComponent(AmdinheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
