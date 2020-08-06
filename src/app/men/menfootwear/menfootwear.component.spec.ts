import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenfootwearComponent } from './menfootwear.component';

describe('MenfootwearComponent', () => {
  let component: MenfootwearComponent;
  let fixture: ComponentFixture<MenfootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenfootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
