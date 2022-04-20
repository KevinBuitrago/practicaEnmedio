import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtistasComponent } from './list-artistas.component';

describe('ListArtistasComponent', () => {
  let component: ListArtistasComponent;
  let fixture: ComponentFixture<ListArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArtistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
