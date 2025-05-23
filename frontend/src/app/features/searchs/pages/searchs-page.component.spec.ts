import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsPageComponent } from './searchs-page.component';

describe('SearchsPageComponent', () => {
  let component: SearchsPageComponent;
  let fixture: ComponentFixture<SearchsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
