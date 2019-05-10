export interface Main {
  tweets: Tweet[];
  userData: UserTw;
  fbWall?: Post[];
}

export interface UserTw{
  id: number,
  id_str: string,
  name: string,
  screen_name: string,
  location: string,
  description: string,
  followers_count: number,
  friends_count: number,
  created_at: string,
  favourites_count: number,
  verified: boolean,
  statuses_count: number,
  lang: string,
  profile_image_url_https: string,
}

export interface Message {
  message: string;
  date: Date;
}

export interface Tweet{
  created_at?: number;
  id?: string;
  id_str: string;
  text: string;
  user: object;
  retweet_count: number;
  favorite_count: number;
}

export interface Post{
  created_time: Date;
  message: string;
  id: string;
}