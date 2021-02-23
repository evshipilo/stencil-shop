import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-no-found',
  styleUrl: 'app-no-found.css',
  shadow: true,
})
export class AppNoFound {

  render() {
    return (
     <p>error 404! page not found</p>
    );
  }

}
