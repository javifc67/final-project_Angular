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
  datestr
  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  constructor(private store: Store) {}
  ngOnInit(){
    const date = new Date(this.user.created_at)
    this.datestr = this.formatDate(date);
  }
}
