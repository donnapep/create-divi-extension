// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class HelloWorld extends Component {

  static slug = '__prefix_hello_world';

  render() {
    const Content = this.props.content;

    return (
      <div class="__prefix-hello-world">
        <h1>
          <Content/>
        </h1>
        <p>{this.props.field}</p>
      </div>
    );
  }
}

export default HelloWorld;
