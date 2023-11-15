import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallDecorComponent } from './wall-decor.component';

describe('WallDecorComponent', () => {
  let component: WallDecorComponent;
  let fixture: ComponentFixture<WallDecorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallDecorComponent]
    });
    fixture = TestBed.createComponent(WallDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
