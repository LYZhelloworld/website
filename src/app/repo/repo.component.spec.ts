import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoComponent } from './repo.component';

describe('RepositoriesComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
