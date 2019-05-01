import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { authFacebook } from '../../store/mainPage.actions';

@Component({
  selector: 'sa-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.less']
})
export class facebookComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }
  auth() {
    this.store.dispatch(new authFacebook());
  }
}

