import { Component, Input, OnInit } from '@angular/core';
import { Retweet, AddFav } from '../../store/mainPage.actions';
import { Store } from '@ngxs/store';


@Component({
  selector: 'sa-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})

export class tweetComponent implements OnInit{
  @Input() tweet;
  favs = 0
  favsm = 0;
  rtCount= 0;
  followCount= 0;
  constructor(private store: Store) {}
  rt() {
    this.store.dispatch(new Retweet(this.tweet.id_str));
    this.rtCount += 1
  }
  addfav() {
    this.store.dispatch(new AddFav(this.tweet.id));
    this.favs += 1
    this.favsm += 1
  }
  
  ngOnInit() {
    this.favs= this.tweet.user.favourites_count
    this.favsm = this.tweet.retweet_count
    this.rtCount = this.tweet.retweet_count
    this.followCount = this.tweet.user.followers_count
  }
}
