import {Component, h} from '@stencil/core';
import state from '../../global/stores/posts-store'
import {names} from "../../global/enum/enum";

@Component({
  tag: 'app-card-list',
  styleUrl: 'app-card-list.css',
  shadow: true,
})
export class AppCardList {

  render() {
    if (state.posts) return state.posts.map(post =>
      <app-card
        postId={+post.id}
        body={post.body}
        userName={names[post.userId]}
        title={post.title}>
      </app-card>)
    else return <div>NO DATA. Wait!</div>
  }

}
