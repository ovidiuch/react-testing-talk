import { objectOf, string, bool, func, oneOfType } from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { Rows } from '../../../shared/style/layout';

export function UnchangedCategory(props) {
  return <Category {...props} DiffType={'span'} />;
}

export function AddedCategory(props) {
  return <Category {...props} DiffType={Added} />;
}

export function RemovedCategory(props) {
  return <Category {...props} DiffType={Removed} />;
}

const categoryPropTypes = {
  name: string.isRequired,
  tests: objectOf(string).isRequired,
  showTests: bool
};

UnchangedCategory.types = RemovedCategory.types = AddedCategory.types = categoryPropTypes;

function Category({ DiffType, name, tests, showTests }) {
  const titles = Object.keys(tests);
  const numTests = titles.length;
  const targetHeight = getTestLineHeight(numTests);

  return (
    <Container>
      <Title>
        <DiffType>{`${name} (${numTests})`}</DiffType>
      </Title>
      <TestList
        style={{
          height: showTests ? targetHeight : 0,
          opacity: showTests ? 1 : 0
        }}
      >
        {titles.map(title => {
          return (
            <li key={title}>
              <DiffType>
                <TestName>{title}</TestName>
              </DiffType>
            </li>
          );
        })}
      </TestList>
    </Container>
  );
}

Category.propTypes = {
  ...categoryPropTypes,
  DiffType: oneOfType([func, string]).isRequired
};

const Container = styled(Rows)`
  flex: auto;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0 0 32px 0;
  font-size: 36px;
  font-weight: 500;
`;

const TestList = styled.ul`
  margin: 0;
  padding: 0 0 0 24px;
  list-style: none;
  overflow: hidden;
  transition: height 0.8s, opacity 0.8s;
`;

const TEST_LINE_HEIGHT = 48;

function getTestLineHeight(numCats) {
  return numCats * TEST_LINE_HEIGHT;
}

const TestName = styled.span`
  font-size: 24px;
  line-height: ${TEST_LINE_HEIGHT}px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace !important;
  white-space: nowrap;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    content: 'it("';
    opacity: 0.4;
  }

  &:after {
    content: '")';
    opacity: 0.4;
  }
`;

const Added = styled.span`
  background: lightgreen;
  padding: 6px 6px;

  &:before {
    content: '+';
  }
`;

const Removed = styled.span`
  background: rgba(255, 99, 71, 0.8); /* tomato */
  padding: 6px 6px;

  &:before {
    content: '-';
  }
`;
