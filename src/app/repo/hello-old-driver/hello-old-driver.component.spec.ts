import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloOldDriverComponent } from './hello-old-driver.component';

describe('HelloOldDriverComponent', () => {
  let component: HelloOldDriverComponent;
  let fixture: ComponentFixture<HelloOldDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloOldDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloOldDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
