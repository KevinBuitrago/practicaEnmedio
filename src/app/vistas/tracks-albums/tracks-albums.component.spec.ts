import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksAlbumsComponent } from './tracks-albums.component';

describe('TracksAlbumsComponent', () => {
  let component: TracksAlbumsComponent;
  let fixture: ComponentFixture<TracksAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
