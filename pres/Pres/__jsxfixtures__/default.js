import { number } from 'prop-types';
import React from 'react';
import { ComponentState } from 'react-cosmos-fixture';
import { Pres } from '..';
import { Center, Rows, Cols, Main, RowSeparator } from '../../style/layout';
import { P, H1, H2, List, DarkBlue, NoWrap } from '../../style/text';
import { Emoji } from '../../Emoji';

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
            <RowSeparator />
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
            <RowSeparator />
            <Rows>
              <Emoji>🤕</Emoji>
              <P>
                <NoWrap>Testing pain</NoWrap>
              </P>
            </Rows>
            <RowSeparator />
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
            <RowSeparator />
            <Rows>
              <Emoji>😎</Emoji>
              <P>
                <NoWrap>Confidence</NoWrap>
              </P>
            </Rows>
            <RowSeparator />
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
            <RowSeparator />
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
