import { shape, objectOf, string } from 'prop-types';
import { get } from 'lodash';
import styled from 'styled-components';
import React, { Fragment, Component } from 'react';
import { Center, Cols, ColSeparator } from '../../shared/style/layout';

const testsType = shape({
  tight: objectOf(objectOf(string)),
  loose: objectOf(objectOf(string))
});

const Container = styled(Center)`
  align-items: flex-start;
`;

const Inner = styled(Cols)``;

const Side = styled.div`
  padding: 32px 0;
`;

export class TestComparison extends Component {
  static propTypes = {
    tests: testsType.isRequired,
    prevTests: testsType.isRequired
  };

  render() {
    const { tests, prevTests } = this.props;

    return (
      <Container>
        <Inner>
          <Side>
            {Object.keys(tests.tight).map(cat => {
              return (
                <Category
                  key={cat}
                  name={cat}
                  tests={tests.tight[cat]}
                  prevTests={get(prevTests, `tight.${cat}`)}
                />
              );
            })}
            {prevTests &&
              Object.keys(prevTests.tight)
                .filter(cat => !tests.tight[cat])
                .map(cat => (
                  <RemovedCategory
                    key={cat}
                    name={cat}
                    tests={prevTests.tight[cat]}
                  />
                ))}
          </Side>
          <ColSeparator />
          <ColSeparator />
          <Side>
            <Category
              name="loose"
              tests={tests.loose.index}
              prevTests={prevTests.loose.index}
            />
          </Side>
        </Inner>
      </Container>
    );
  }
}

class Category extends Component {
  render() {
    const { tests, prevTests } = this.props;

    return (
      <>
        <TestCategory>{this.getTitle()}</TestCategory>
        <TestList>
          {tests &&
            Object.keys(tests).map(title => {
              return (
                <li key={title}>
                  <TestName>
                    {get(tests, title) !== get(prevTests, title) ? (
                      <Added>{title}</Added>
                    ) : (
                      title
                    )}
                  </TestName>
                </li>
              );
            })}
          {prevTests &&
            Object.keys(prevTests)
              .filter(title => prevTests[title] !== tests[title])
              .map(title => (
                <li key={title}>
                  <TestName>
                    <Removed>{title}</Removed>
                  </TestName>
                </li>
              ))}
        </TestList>
      </>
    );
  }

  getTitle() {
    const { name, tests, prevTests } = this.props;

    const count = Object.keys(tests || prevTests).length;
    const title = `${name} (${count})`;

    if (tests && !prevTests) {
      return <Added>{title}</Added>;
    }

    return title;
  }
}

Category.propTypes = {
  name: string.isRequired,
  tests: objectOf(string).isRequired,
  prevTests: objectOf(string)
};

function RemovedCategory({ name, tests }) {
  const count = Object.keys(tests).length;

  return (
    <Fragment key={name}>
      <TestCategory>
        <Removed>{`${name} (${count})`}</Removed>
      </TestCategory>
      <TestList>
        {Object.keys(tests).map(title => {
          return (
            <li key={title}>
              <TestName>
                <Removed>{title}</Removed>
              </TestName>
            </li>
          );
        })}
      </TestList>
    </Fragment>
  );
}

RemovedCategory.propTypes = {
  name: string.isRequired,
  tests: objectOf(string).isRequired
};

const TestCategory = styled.h3`
  margin: 16px 0 0 0;
  font-size: 24px;
  font-weight: 600;
`;

const TestList = styled.ul`
  margin: 8px 0 0 0;
  padding: 0 0 0 16px;
`;

const TestName = styled.span`
  font-size: 16px;
  line-height: 28px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace !important;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Added = styled.span`
  background: lightgreen;
  padding: 6px 6px;

  &:before {
    content: '+';
  }
`;

const Removed = styled.span`
  background: tomato;
  padding: 6px 6px;

  &:before {
    content: '-';
  }
`;
