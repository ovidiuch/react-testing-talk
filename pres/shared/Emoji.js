import styled from 'styled-components';
import { string, number } from 'prop-types';
import React, { Component } from 'react';
import twemoji from 'twemoji';

export class Emoji extends Component {
  static propTypes = {
    children: string.isRequired,
    size: number
  };

  static defaultProps = {
    size: 192
  };

  render() {
    const { size } = this.props;

    return (
      <Root
        size={size}
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

const Root = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;
