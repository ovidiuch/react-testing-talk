/* eslint-env browser */

import { arrayOf, element } from 'prop-types';
import { Component } from 'react';

const LEFT = 37;
const RIGHT = 39;
const PAGE_UP = 33;
const PAGE_DOWN = 34;

// Use `keydown` for debugging and `keyup` when presenting!
const KEY_EVENT = 'keydown';

export class Pres extends Component {
  state = {
    slideIndex: 0
  };

  static propTypes = {
    children: arrayOf(element)
  };

  render() {
    const { slideIndex } = this.state;
    const index = Math.min(Math.max(0, slideIndex), this.getLastSlideIndex());

    return this.props.children[index];
  }

  componentDidMount() {
    window.addEventListener(KEY_EVENT, this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener(KEY_EVENT, this.handleKeyPress);
  }

  handleKeyPress = e => {
    switch (e.keyCode) {
      case LEFT:
      case PAGE_UP:
        return this.goBack();
      case RIGHT:
      case PAGE_DOWN:
        return this.goForward();
      default:
    }
  };

  goBack() {
    this.setState({
      slideIndex: Math.max(this.state.slideIndex - 1, 0)
    });
  }

  goForward() {
    this.setState({
      slideIndex: Math.min(this.state.slideIndex + 1, this.getLastSlideIndex())
    });
  }

  getLastSlideIndex() {
    return this.props.children.length - 1;
  }
}
