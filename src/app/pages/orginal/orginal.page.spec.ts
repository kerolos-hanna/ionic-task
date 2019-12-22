import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrginalPage } from './orginal.page';

describe('OrginalPage', () => {
  let component: OrginalPage;
  let fixture: ComponentFixture<OrginalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrginalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrginalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
