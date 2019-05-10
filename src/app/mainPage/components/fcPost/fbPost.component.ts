import { Component, Input, OnInit } from '@angular/core';
import { Retweet, AddFav } from '../../store/mainPage.actions';
import { Store } from '@ngxs/store';


@Component({
  selector: 'sa-fbPost',
  templateUrl: './fbPost.component.html',
  styleUrls: ['./fbPost.component.less']
})

export class fbPostComponent implements OnInit{
  @Input() post;
  datestr
  user = 'Javier Ferreño'
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
    const date = new Date(this.post.created_time)
    this.datestr = this.formatDate(date);
  }
}
