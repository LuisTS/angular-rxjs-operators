import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorsTwoComponent } from './rxjs-operators-two.component';

describe('RxjsOperatorsTwoComponent', () => {
  let component: RxjsOperatorsTwoComponent;
  let fixture: ComponentFixture<RxjsOperatorsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOperatorsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOperatorsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
