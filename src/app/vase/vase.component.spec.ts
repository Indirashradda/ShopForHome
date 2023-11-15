import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaseComponent } from './vase.component';

describe('VaseComponent', () => {
  let component: VaseComponent;
  let fixture: ComponentFixture<VaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaseComponent]
    });
    fixture = TestBed.createComponent(VaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
