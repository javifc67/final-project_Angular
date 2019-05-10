import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Message, Main, Tweet } from '../mainPage.models';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  constructor(private http: HttpClient) {}

  authTwitter() {
    window.location.href = `${environment.apiBaseUrl}/login/twitter?id=abc`
  }

  postTweet(message: Message) {
    return this.http.post<Tweet>(`${environment.apiBaseUrl}/twitter/tweet`, message);
  }

  getTweets() {
    return this.http.get<Main>(`${environment.apiBaseUrl}/twitter/tweets`);
  }

  retweet(tweet) {
    const data = {
      tweetId: tweet
    }
    return this.http.post<Tweet>(`${environment.apiBaseUrl}/twitter/retweet`, data);
  }
  addFav(tweet) {
    const data = {
      tweetId: tweet
    }
    return this.http.post(`${environment.apiBaseUrl}/twitter/addFav`, data);
  }

  authFacebook() {
    window.location.href = `http://localhost:8000/api/login/facebook`
  }
  getFbWall() {
    return this.http.get<any>(`${environment.apiBaseUrl}/facebook/wall`);
  }
  
}
