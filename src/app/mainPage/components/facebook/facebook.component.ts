import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { authFacebook, GetFacebookWall } from '../../store/mainPage.actions';
import { Observable } from 'rxjs';
import { Post } from '../../mainPage.models';

@Component({
  selector: 'sa-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.less']
})
export class facebookComponent implements OnInit {

  @Select(state => state.main.fbWall) wall$: Observable<Post[]>;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetFacebookWall());
  }
  authFb() {
    this.store.dispatch(new authFacebook());
  }
}

