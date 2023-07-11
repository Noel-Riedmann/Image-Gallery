import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerytemplateComponent } from './gallerytemplate.component';

describe('GallerytemplateComponent', () => {
  let component: GallerytemplateComponent;
  let fixture: ComponentFixture<GallerytemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerytemplateComponent]
    });
    fixture = TestBed.createComponent(GallerytemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
