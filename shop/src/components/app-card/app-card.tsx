import {Component, h, Prop} from '@stencil/core';


@Component({
  tag: 'app-card',
  styleUrl: 'app-card.css',
  shadow: true,
})
export class AppCard {
  @Prop() title: string
  @Prop() body: string
  @Prop() userName: string
  @Prop() postId: number
  // @Prop() history: RouterHistory;


  render() {
    return (
      <div class='card'>
        <p class='user'>User:</p>
        <h4>{this.userName}</h4>
        <hr/>
        <p>Title:</p>
        <p>{this.title}</p>
        <p>{`Post №${this.postId}:`}</p>
        <p>{this.body}</p>
        <stencil-route-link url={`/post/${this.postId}`}>
          <button>View Post</button>
        </stencil-route-link>
        {/*<button onClick={this.goToViewPage}>View Post</button>*/}
      </div>
    );
  }

}

// injectHistory(AppCard);
