import { string } from 'prop-types';
import React, { Component } from 'react';
import twemoji from 'twemoji';

export class Emoji extends Component {
  static propTypes = {
    children: string.isRequired
  };

  render() {
    return (
      <div
        style={{ width: 128, height: 128 }}
        dangerouslySetInnerHTML={{
          __html: twemoji.parse(this.props.children, {
            ext: '.svg',
            callback: (icon, options) => `/emoji/${icon}${options.ext}`
          })
        }}
      />
    );
  }
}
