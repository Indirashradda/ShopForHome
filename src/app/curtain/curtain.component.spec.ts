import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainComponent } from './curtain.component';

describe('CurtainComponent', () => {
  let component: CurtainComponent;
  let fixture: ComponentFixture<CurtainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurtainComponent]
    });
    fixture = TestBed.createComponent(CurtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
