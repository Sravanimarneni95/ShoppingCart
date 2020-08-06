import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfootwearComponent } from './womenfootwear.component';

describe('WomenfootwearComponent', () => {
  let component: WomenfootwearComponent;
  let fixture: ComponentFixture<WomenfootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenfootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
