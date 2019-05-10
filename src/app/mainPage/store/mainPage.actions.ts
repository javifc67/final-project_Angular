import { Message, Tweet, UserTw, Main, Post } from '../mainPage.models';


export class authTwitter {
  static type = '[Main] Twitter';
}

export class authTwitterSuccess {
  static readonly type = '[Main] AuthTwitterSuccess';
  constructor() {}
}

export class authTwitterFailed {
  static type = '[Main] AuthTwitterFailed';
  constructor(public error: Error[]) {}
}

export class postTweet {
  static type = '[Main] PostTweet';
  constructor(public message: Message) {  }
}

export class postTweetSuccess {
  static readonly type = '[Main] PostTweetSuccess';
  constructor(public tweet: Tweet) {}
}

export class postTweetFailed {
  static type = '[Main] PostTweetFailed';
  constructor(public error: Error[]) {}
}

export class GetTweets {
  static readonly type = '[Main] GetTweets';
  constructor() {}
}

export class GetTweetsSuccess {
  static readonly type = '[Main] GetTweetsSuccess';
  constructor(public main: Main) {}
}

export class GetTweetsFailed {
  static readonly type = '[Main] GetTweetsFailed';
  constructor(public errors: Error[]) {}
}

export class Retweet {
  static readonly type = '[Main] Retweet';
  constructor(public tweet: string) {}
}

export class RetweetSuccess {
  static readonly type = '[Main] Retweet Success';
  constructor(public tweet: Tweet) {}
}

export class RetweetFailed {
  static readonly type = '[Main] Retweet Failed';
  constructor(public errors: Error[]) {}
}
export class AddFav {
  static readonly type = '[Main] AddFav';
  constructor(public tweet: string) {}
}

export class AddFavSuccess {
  static readonly type = '[Main] AddFav Success';
  constructor(public tweet: string) {}
}

export class AddFavFailed {
  static readonly type = '[Main] AddFav Failed';
  constructor(public errors: Error[]) {}
}

export class authFacebook {
  static type = '[Main] Facebook';
}
export class GetFacebookWall {
  static readonly type = '[Main] GetFacebookWall';
  constructor() {}
}

export class GetFacebookWallSuccess {
  static readonly type = '[Main] GetFacebookWallSuccess';
  constructor(public wall: Post[]) {}
}

export class GetFacebookWallFailed {
  static readonly type = '[Main] GetFacebookWallFailed';
  constructor(public errors: Error[]) {}
}
