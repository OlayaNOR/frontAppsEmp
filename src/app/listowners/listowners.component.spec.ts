import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListownersComponent } from './listowners.component';

describe('ListownersComponent', () => {
  let component: ListownersComponent;
  let fixture: ComponentFixture<ListownersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListownersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
