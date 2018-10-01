import styled from 'styled-components';
import { string } from 'prop-types';
import React, { Component } from 'react';
import twemoji from 'twemoji';

export class Emoji extends Component {
  static propTypes = {
    children: string.isRequired
  };

  render() {
    return (
      <Root
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
  width: 192px;
  height: 192px;
`;
