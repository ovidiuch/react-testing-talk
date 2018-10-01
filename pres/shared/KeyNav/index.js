/* eslint-env browser */

import { func, node } from 'prop-types';
import { Component } from 'react';

const LEFT = 37;
const RIGHT = 39;
const PAGE_UP = 33;
const PAGE_DOWN = 34;

// Use `keydown` for debugging and `keyup` when presenting!
const KEY_EVENT = 'keydown';

export class KeyNav extends Component {
  static propTypes = {
    children: node,
    onPrev: func.isRequired,
    onNext: func.isRequired
  };

  render() {
    return this.props.children;
  }

  componentDidMount() {
    window.addEventListener(KEY_EVENT, this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener(KEY_EVENT, this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { onPrev, onNext } = this.props;

    switch (e.keyCode) {
      case LEFT:
      case PAGE_UP:
        e.preventDefault();
        return onPrev();
      case RIGHT:
      case PAGE_DOWN:
        e.preventDefault();
        return onNext();
      default:
    }
  };
}
