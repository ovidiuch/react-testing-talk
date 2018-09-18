import { number } from 'prop-types';
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
import testMetadata from '../../../test.metadata.json';
import { Emoji } from '../../Emoji';
import { TestComparison } from '../../TestComparison';
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
            <Rows>
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
            <Rows style={{ opacity: 0.5 }}>
              <Emoji>😇</Emoji>
              <P>
                <NoWrap>Testing nirvana</NoWrap>
              </P>
            </Rows>
          </Cols>
        </Main>
      </Rows>
      <Rows>
        <H1>Talk summary</H1>
        <Main>
          <List>
            <li>UI testing overview</li>
            <li>Testing and refactoring</li>
            <li>Component setup</li>
            <li>FAQ</li>
            <li>Conclusion</li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <UiTestingOverviewHeader idx={0} />
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
        <UiTestingOverviewHeader idx={1} />
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
        <UiTestingOverviewHeader idx={2} />
        <Main>TODO</Main>
      </Rows>
      <Rows>
        <UiTestingOverviewHeader idx={3} />
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
      <Center>
        <LoginForm
          status="pending"
          username=""
          password=""
          onChange={() => {}}
          onSubmit={() => {}}
        />
      </Center>
      <TestComparison tests={testMetadata['1-redux-state']} />
      <TestComparison tests={testMetadata['2-component-state']} />
      <Rows>
        <H1>Takeaway</H1>
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
        <H1>f=(props, state, env)</H1>
        <Main>
          <Emoji>🐵</Emoji>
        </Main>
      </Rows>
      <Rows>
        <H1>Component input</H1>
        <Main>
          <List>
            <li>Props</li>
            <li>State (explicit, implicit)</li>
            <li>Env (platform, external)</li>
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
          <P>{`TODO "Declarative mocks" recap`}</P>
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
            <li>On meaning</li>
            <li>To mock or not to mock</li>
            <li>The unit spectrum</li>
          </List>
        </Main>
      </Rows>
      <Rows>
        <P>
          Although I start with the notion of the unit being a class, I often
          take a bunch of closely related classes and treat them as a single
          unit.
        </P>
        <P>
          {`Rarely I might take a subset of methods in a class as a unit. However
          you define [a unit] doesn't really matter.`}
        </P>
        <P>
          <strong>
            The team decides what makes sense to be a unit for the purposes of
            their understanding of the system and its testing.
          </strong>
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
      <Rows>
        <H1>Thanks.</H1>
        <Main>
          <a href="https://twitter.com/skidding">@skidding</a>
        </Main>
      </Rows>
    </Pres>
  </ComponentState>
);

function UiTestingOverviewHeader({ idx }) {
  return (
    <H1>
      <span style={{ opacity: idx === 0 ? 1 : 0.3 }}>Testing pros</span>
      <br />
      <span style={{ opacity: idx === 1 ? 1 : 0.3 }}>Testing cons</span>
      <br />
      <span style={{ opacity: idx === 2 ? 1 : 0.3 }}>Test anatomy</span>
      <br />
      <span style={{ opacity: idx === 3 ? 1 : 0.3 }}>Recap</span>
    </H1>
  );
}

UiTestingOverviewHeader.propTypes = {
  idx: number
};
