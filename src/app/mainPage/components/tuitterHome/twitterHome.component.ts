import { Component, OnInit, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { postTweet, GetTweets, Retweet, authTwitter } from '../../store/mainPage.actions';
import { Observable } from 'rxjs';
import { Tweet, UserTw } from '../../mainPage.models';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'sa-twitterHome',
  templateUrl: './twitterHome.component.html',
  styleUrls: ['./twitterHome.component.less']
})
export class twitterHomeComponent implements OnInit {
  date = new Date;
  content= ''
  isValid= false
  now

  @Select(state => state.main.tweets) tweets$: Observable<Tweet[]>;
  @Select(state => state.main.userData) userData$: Observable<UserTw[]>;

  constructor(
    private store: Store,
    private route: ActivatedRoute, 
    private element: ElementRef) { }
  
    
    
    ngOnInit() {
      this.route.params.subscribe(routeParams => {
        this.store.dispatch(new GetTweets());
        
        this.element.nativeElement.parentElement.scrollTop = 0;
      });
      this.now = new Date
    };
    check() {
      const tweets = this.tweets$
      if (tweets[1]){
        this.isValid = true
      }
    }
  authTW() {
    this.store.dispatch(new authTwitter());
  }
  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date): void {
    this.date = result
  }

  publish() {
    if (!this.content || !this.date) {
      return;
    }
    this.store.dispatch(new postTweet({message: this.content, date: this.date}));
  }
  
}
