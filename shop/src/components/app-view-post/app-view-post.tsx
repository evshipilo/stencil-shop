import {Component, h, Prop} from '@stencil/core';
import {MatchResults, RouterHistory} from "@stencil/router";
import state from '../../global/stores/posts-store'


@Component({
  tag: 'app-view-post',
  styleUrl: 'app-view-post.css',
  shadow: false,
})
export class AppViewPost {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  render() {
    return (
      <div>
      <button onClick={()=>{this.history.goBack()}}>Back</button>
      <div class='card'>
        <p>Title:</p>
        <p>{state.posts[+this.match.params.id-1].title}</p>
        <p>{`Post №${state.posts[+this.match.params.id-1].id}:`}</p>
        <p>{state.posts[+this.match.params.id-1].body}</p>
      </div>
      </div>
    );
  }
}

