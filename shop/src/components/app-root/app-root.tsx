import { Component, h } from '@stencil/core';
import state from "../../global/stores/posts-store";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  componentWillLoad() {
    return   fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => response.json())
      .then((json) => {
        state.posts = json
      } );
  }

  render() {
    return (
      <div class='container'>
        <header>
          <h1>Post-Searcher</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route url="/post/:id" component="app-view-post" />
              <stencil-route component="app-no-found" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
