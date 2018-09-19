import { string, shape, objectOf, array } from 'prop-types';
import styled from 'styled-components';
import React, { Fragment, Component } from 'react';
import { Rows, Cols, ColSeparator } from '../../shared/style/layout';
import { H2 } from '../../shared/style/text';

export class TestComparison extends Component {
  static propTypes = {
    title: string.isRequired,
    tests: shape({
      tight: objectOf(array),
      loose: objectOf(array)
    }).isRequired
  };

  render() {
    const { title, tests } = this.props;
    const { tight, loose } = tests;
    const looseCount = countTests(loose);

    return (
      <Rows>
        <H2>{title}</H2>
        <Cols>
          <div>
            {Object.keys(tight).map(cat => (
              <Fragment key={cat}>
                <TestCategory>
                  {cat} ({tight[cat].length})
                </TestCategory>
                <TestList>
                  {tight[cat].map(test => (
                    <TestName key={test}>{test}</TestName>
                  ))}
                </TestList>
              </Fragment>
            ))}
          </div>
          <ColSeparator />
          <ColSeparator />
          <div>
            <TestCategory>
              {`"loose"`} tests ({looseCount})
            </TestCategory>
            <TestList>
              {loose.index.map(test => (
                <TestName key={test}>{test}</TestName>
              ))}
            </TestList>
          </div>
        </Cols>
      </Rows>
    );
  }
}

const TestCategory = styled.h3`
  margin: 16px 0 0 0;
  font-size: 24px;
  font-weight: 600;
  opacity: 0.9;
`;

const TestList = styled.ul`
  margin: 8px 0 0 0;
  padding: 0 0 0 16px;
`;

const TestName = styled.li`
  font-size: 14px;
  line-height: 24px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace !important;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

function countTests(tests) {
  return Object.keys(tests).reduce(
    (acc, next) =>
      acc +
      (Array.isArray(tests[next])
        ? tests[next].length
        : countTests(tests[next])),
    0
  );
}
