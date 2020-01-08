import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableAngularComponent } from './custom-table-angular.component';

describe('CustomTableAngularComponent', () => {
  let component: CustomTableAngularComponent;
  let fixture: ComponentFixture<CustomTableAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
