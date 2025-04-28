import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsCardComponent } from './searchs-card.component';

describe('SearchsCardComponent', () => {
  let component: SearchsCardComponent;
  let fixture: ComponentFixture<SearchsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
