import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderMoreFromSonyComponent } from './slider-more-from-sony.component';

describe('SliderMoreFromSonyComponent', () => {
  let component: SliderMoreFromSonyComponent;
  let fixture: ComponentFixture<SliderMoreFromSonyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMoreFromSonyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderMoreFromSonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
