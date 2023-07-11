import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NggalleryComponent } from './nggallery.component';

describe('NggalleryComponent', () => {
  let component: NggalleryComponent;
  let fixture: ComponentFixture<NggalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NggalleryComponent]
    });
    fixture = TestBed.createComponent(NggalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
