import { Message, Tweet, UserTw, Main } from '../mainPage.models';


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
  constructor(public message: Message) {}
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
  constructor(public tweet: string) {}
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
