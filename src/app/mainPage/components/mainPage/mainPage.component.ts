import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUserProfile, Logout } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'sa-main-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.less']
})
export class MainPageComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch([new GetUserProfile()]);
  }
  logout() {
    this.store.dispatch(new Logout);
  }
}
