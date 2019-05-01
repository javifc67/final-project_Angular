import { Component, Input, OnInit } from '@angular/core';
import { Retweet, AddFav } from '../../store/mainPage.actions';
import { Store } from '@ngxs/store';


@Component({
  selector: 'sa-userTwitter',
  templateUrl: './userTwitter.component.html',
  styleUrls: ['./userTwitter.component.less']
})

export class userTwitterComponent implements OnInit{
  @Input() user;
  
  constructor(private store: Store) {}
  ngOnInit(){
  }
}
