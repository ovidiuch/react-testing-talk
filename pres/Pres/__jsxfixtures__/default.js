import styled from 'styled-components';
import React from 'react';
import { ComponentState } from 'react-cosmos-fixture';
import {
  Center,
  Rows,
  Cols,
  Main,
  ColSeparator
} from '../../../shared/style/layout';
import { P, H1, H2, List, DarkBlue, NoWrap } from '../../../shared/style/text';
import { LoginForm } from '../../../shared/LoginForm';
import { Emoji } from '../../Emoji';
import { refactor1, refactor2 } from '../../Box/examples';
import testComparison1 from '../../TestComparison/__jsxfixtures__/1-redux-state';
import testComparison2 from '../../TestComparison/__jsxfixtures__/2-component-state';
import testComparison3 from '../../TestComparison/__jsxfixtures__/3-generic-form';
import { DeclarativeMock } from '../../DeclarativeMock';
import {
  PROPS_SAMPLE,
  STATE_SAMPLE,
  REDUX_SAMPLE,
  STYLED_SAMPLE,
  INTL_SAMPLE,
  XHR_SAMPLE,
  FETCH_SAMPLE,
  LOCALSTORAGE_SAMPLE,
  WINDOW_SAMPLE
} from '../../DeclarativeMock/mockSamples';
import { Pres } from '..';

const SelfLink = styled.a`
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;
  text-decoration: none;
`;

export default (
  <ComponentState>
    <Pres>
      <Center>
        <H1>
          Testing <DarkBlue>React</DarkBlue> components
        </H1>
      </Center>
      <Rows>
        <H1>Why?</H1>
        <H2>software = code + test</H2>
        <Main>
          <Cols>
            <Rows>
              <Emoji>👍</Emoji>
              <P>
                <NoWrap>React coding</NoWrap>
              </P>
            </Rows>
            <ColSeparator />
            <Rows>
              <Emoji>😕</Emoji>
              <P>
                <NoWrap>React testing</NoWrap>
              </P>
            </Rows>
          </Cols>
        </Main>
      </Rows>
      <Rows>
        <H1>Audience</H1>
        <Main>
          <Cols>
            <Rows style={{ opacity: 0.8 }}>
              <Emoji>😶</Emoji>
              <P>
                <NoWrap>No testing</NoWrap>
              </P>
            </Rows>
            <ColSeparator />
            <Rows>
              <Emoji>🤕</Emoji>
              <P>
                <NoWrap>Testing pain</NoWrap>
              </P>
            </Rows>
            <ColSeparator />
            <Rows style={{ opacity: 0.6 }}>
              <Emoji>😇</Emoji>
              <P>
                <NoWrap>Testing nirvana</NoWrap>
              </P>
            </Rows>
          </Cols>
        </Main>
      </Rows>
      <Rows>
        <H1>Summary</H1>
        <Main>
          <List>
            <li>UI testing overview</li>
            <li>Testing vs refactoring</li>
            <li>Component setup</li>
            <li>FAQ</li>
            <li>Conclusion</li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <H1>Testing pros</H1>
        <Main>
          <Cols>
            <Rows>
              <Emoji>🧐</Emoji>
              <P>
                <NoWrap>Clarity</NoWrap>
              </P>
            </Rows>
            <ColSeparator />
            <Rows>
              <Emoji>😎</Emoji>
              <P>
                <NoWrap>Confidence</NoWrap>
              </P>
            </Rows>
            <ColSeparator />
            <Rows>
              <Emoji>🚨</Emoji>
              <P>
                <NoWrap>Regression</NoWrap>
              </P>
            </Rows>
          </Cols>
        </Main>
      </Rows>
      <Rows>
        <H1>Testing cons</H1>
        <Main>
          <Cols>
            <Rows style={{ opacity: 0.5 }}>
              <Emoji>⌨️</Emoji>
              <P>
                <NoWrap>More typing</NoWrap>
              </P>
            </Rows>
            <ColSeparator />
            <Rows>
              <Emoji>⏳</Emoji>
              <P>
                <NoWrap>Refactor drag</NoWrap>
              </P>
            </Rows>
          </Cols>
        </Main>
      </Rows>
      <Rows>
        <H1>Test anatomy</H1>
        <H2>Pure function</H2>
        <Main>
          <List>
            <li>
              <strong>Setup:</strong> Arguments
            </li>
            <li>
              <strong>Action:</strong> Call
            </li>
            <li>
              <strong>Expect:</strong> Return value
            </li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <H1>Test anatomy</H1>
        <H2>UI component</H2>
        <Main>
          <List>
            <li>
              <strong>Setup:</strong> Props, state, context (app, platform,
              server)
            </li>
            <li>
              <strong>Action:</strong> Render, event (UI, network, timeout)
            </li>
            <li>
              <strong>Expect:</strong> Render output, side effect (callback
              prop, app state)
            </li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <H1>Recap</H1>
        <Main>
          <List>
            <li>
              UI testing has <strong>pros & cons</strong>
            </li>
            <li>
              UI tests <strong>!=</strong> function tests
            </li>
            <li>
              UI <strong>test setup</strong> can be tideous
            </li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <H1>
          Testing <em>vs</em> refactoring
        </H1>
        <Main>
          <Cols>
            <Emoji>⚔️</Emoji>
          </Cols>
        </Main>
      </Rows>
      <Center>
        <LoginForm
          status="pending"
          username=""
          password=""
          onChange={() => {}}
          onSubmit={() => {}}
        />
      </Center>
      {testComparison1}
      <Rows>
        <H2>Refactor: Change data source</H2>
        <Main>{refactor1}</Main>
      </Rows>
      {testComparison2}
      <Rows>
        <H2>Refactor: Extract generic form</H2>
        <Main>{refactor2}</Main>
      </Rows>
      {testComparison3}
      <Rows>
        <H1>Recap</H1>
        <Main>
          <List>
            <li>Tight units slow down refactoring</li>
            <li>Many abstractions are transitory</li>
            <li>User-oriented units are more stable</li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <H1>The catch</H1>
        <H2>Test setup complexity</H2>
      </Rows>
      <Rows>
        <H1>f=(props, state)</H1>
        <Main>
          <Emoji>🙈</Emoji>
        </Main>
      </Rows>
      <Rows>
        <H1>
          f=(props, state, <em>context</em>)
        </H1>
        <Main>
          <Emoji>🤯</Emoji>
        </Main>
      </Rows>
      <Rows>
        <H1>Component input</H1>
        <Main>
          <List>
            <li>Props</li>
            <li>State</li>
            <li>Context (app, platform, server)</li>
          </List>
        </Main>
      </Rows>
      <DeclarativeMock title="props" code={PROPS_SAMPLE} />
      <DeclarativeMock title="state" code={STATE_SAMPLE} />
      <DeclarativeMock title="Redux" code={REDUX_SAMPLE} />
      <DeclarativeMock title="styled-components" code={STYLED_SAMPLE} />
      <DeclarativeMock title="react-intl" code={INTL_SAMPLE} />
      <DeclarativeMock title="XHR" code={XHR_SAMPLE} />
      <DeclarativeMock title="Fetch" code={FETCH_SAMPLE} />
      <DeclarativeMock title="LocalStorage" code={LOCALSTORAGE_SAMPLE} />
      <DeclarativeMock title="window" code={WINDOW_SAMPLE} />
      <Rows>
        <H1>Recap</H1>
        <Main>
          <List>
            <li>
              Component context <em>can</em> be mocked
            </li>
            <li>Declarative mocks simplify test setup</li>
            <li>Mocking context reveals implicit deps</li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <H1>FAQ</H1>
        <Main>
          <List>
            <li>What about shallow rendering?</li>
            <li>Test fail noise?</li>
            <li>{`Isn't this E2E testing?`}</li>
            <li>
              {`Isn't`} this{' '}
              <a
                href="https://twitter.com/jamiebuilds/status/954927205099847680"
                target="_blank"
                rel="noopener noreferrer"
              >
                integration
              </a>{' '}
              <a
                href="https://twitter.com/kentbeck/status/938461525626437632"
                target="_blank"
                rel="noopener noreferrer"
              >
                testing
              </a>
              ?
            </li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <H1>Conclusions</H1>
        <Main>
          <List>
            <li>On unit meaning</li>
            <li>To mock or not to mock</li>
            <li>The unit spectrum</li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <Cols>
          <div style={{ width: '20%' }} />
          <Rows>
            <P style={{ fontStyle: 'italic' }}>
              Although I start with the notion of the unit being a class, I
              often take a bunch of closely related classes and treat them as a
              single unit.
            </P>
          </Rows>
          <div style={{ width: '20%' }} />
        </Cols>
      </Rows>
      <Rows>
        <Cols>
          <div style={{ width: '20%' }} />
          <Rows>
            <P style={{ fontStyle: 'italic', opacity: 0.5 }}>
              Although I start with the notion of the unit being a class, I
              often take a bunch of closely related classes and treat them as a
              single unit.
            </P>
            <P style={{ fontStyle: 'italic' }}>
              Rarely I might take a subset of methods in a class as a unit.{' '}
              <strong>
                {`However you define [a unit] doesn't really matter.`}
              </strong>
            </P>
          </Rows>
          <div style={{ width: '20%' }} />
        </Cols>
      </Rows>
      <Rows>
        <Cols>
          <div style={{ width: '20%' }} />
          <Rows>
            <P style={{ fontStyle: 'italic', opacity: 0.5 }}>
              Although I start with the notion of the unit being a class, I
              often take a bunch of closely related classes and treat them as a
              single unit.
            </P>
            <P style={{ fontStyle: 'italic', opacity: 0.5 }}>
              Rarely I might take a subset of methods in a class as a unit.{' '}
              <strong>
                {`However you define [a unit] doesn't really matter.`}
              </strong>
            </P>
            <P style={{ fontStyle: 'italic' }}>
              The team decides what makes sense to be a unit for the purposes of
              their understanding of the system and its testing.
            </P>
            <P>
              <a
                href="https://martinfowler.com/bliki/UnitTest.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Martin Fowler
              </a>
            </P>
          </Rows>
          <div style={{ width: '20%' }} />
        </Cols>
      </Rows>
      <Rows>
        <H1>Thanks.</H1>
        <Main>
          <SelfLink href="https://twitter.com/skidding">
            <DarkBlue>@skidding</DarkBlue>
          </SelfLink>
        </Main>
      </Rows>
    </Pres>
  </ComponentState>
);
