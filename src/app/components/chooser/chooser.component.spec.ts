import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooserComponent } from './chooser.component';

describe("ChooserComponent", () => {
  let component: ChooserComponent;
  let fixture: ComponentFixture<ChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooserComponent);
    component = fixture.componentInstance;
    component.allowed = "[20,40,100]";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
