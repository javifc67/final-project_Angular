import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { Main, Message, Tweet } from '../mainPage.models';
import { MainService } from '../services/mainPage.service';
import { authTwitter,
  postTweet,
  GetTweets,
  GetTweetsSuccess,
  GetTweetsFailed,
  Retweet,
  RetweetSuccess,
  RetweetFailed,
  postTweetSuccess,
  authFacebook,
  AddFav } from './mainPage.actions';
import { tap, catchError } from 'rxjs/operators';

@State<Main>({
  name: 'main',

})

export class MainState {
  constructor(private store: Store, private mainService: MainService) {}

  @Action(authTwitter)
  authTwitter({  dispatch }: StateContext<Main>) {
    return this.mainService.authTwitter();;
  }

  @Action(authFacebook)
  authFacebook({  dispatch }: StateContext<Main>) {
    return this.mainService.authFacebook();;
  }

  @Action(postTweet)
    postTweet({ dispatch }: StateContext<Main>, { message }) {
      return this.mainService.postTweet(message);
    }


    @Action(GetTweets)
    getTweets({ dispatch }: StateContext<Main>) {
      return this.mainService.getTweets().pipe(
        tap(main => dispatch(new GetTweetsSuccess(main))),
        catchError(error => dispatch(new GetTweetsFailed(error.error)))
      );
    }
  
    @Action(GetTweetsSuccess)
    getTweetsSuccess(
      { setState, getState }: StateContext<Main>,
      { main }: GetTweetsSuccess
    ) {
      setState(main);
      }
      
      @Action(Retweet, { cancelUncompleted: true })
      retweet({ dispatch }: StateContext<Main[]>, { tweet }: Retweet) {
        
        return this.mainService.retweet(tweet)
        
      }
      @Action(AddFav, { cancelUncompleted: true })
      addFav({ dispatch }: StateContext<Main[]>, { tweet }: AddFav) {
        
        return this.mainService.addFav(tweet)
        
      }
}
          
          /* .pipe(
            tap(() => dispatch(new RetweetSuccess(tweet))),
            catchError(error => dispatch(new RetweetFailed(error.error)))
          );
        }
  
    @Action(RetweetSuccess)
    retweetSuccess(
      { getState, setState }: StateContext<Post[]>,
      { postId, isLike, userUuid }: RetweetSuccess
    ) {
      setState(
        getState().map(post => {
          if (post.id === postId) {
            return {
              ...post,
              likes: isLike
                ? [...post.likes, userUuid]
                : post.likes.filter(uuid => uuid !== userUuid)
            };
          }
          return post;
        })
      );
    } */
/* updateUserProfile(
    { dispatch }: StateContext<Auth>,
    { profile }: UpdateUserProfile
  ) {
    return this.authService.updateUserProfile(profile).pipe(
      tap(() => dispatch(new UpdateUserProfileSuccess(profile))),
      catchError(error => dispatch(new UpdateUserProfileFailed(error.error)))
    );
  }

  @Action(UpdateUserProfileSuccess)
  updateUserProfileSuccess(
    { patchState }: StateContext<Auth>,
    { profile }: UpdateUserProfileSuccess
  ) {
    patchState({
      ...profile
    });
  } */
/* return this.authService.getUserProfile().pipe(
      tap(profileResponse =>
        dispatch(new GetUserProfileSuccess(profileResponse))
      ),
      catchError(error => dispatch(new GetUserProfileFailed(error.error)))
    );
  }

  @Action(GetUserProfileSuccess)
  getUserProfileSuccess(
    { patchState }: StateContext<Auth>,
    { profile }: GetUserProfileSuccess
  ) {
    patchState({ ...profile });
  } */