import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenclothingComponent } from './menclothing.component';

describe('MenclothingComponent', () => {
  let component: MenclothingComponent;
  let fixture: ComponentFixture<MenclothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenclothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
