import React from 'react';
import { ComponentState } from 'react-cosmos-fixture';
import { Pres } from '..';
import { Center, Rows, Cols, Main, RowSeparator } from '../../style/layout';
import { P, H1, H2, DarkBlue, NoWrap } from '../../style/text';
import { Emoji } from '../../Emoji';

export default (
  <ComponentState>
    <Pres>
      <Center>
        <H1>
          Testing <DarkBlue>React</DarkBlue> components
        </H1>
      </Center>
      <Center>
        <Rows>
          <H1>Why?</H1>
          <H2>software = code + test</H2>
          <Main>
            <Cols>
              <Rows>
                <Emoji>👍</Emoji>
                <P>React coding</P>
              </Rows>
              <RowSeparator />
              <Rows>
                <Emoji>😕</Emoji>
                <P>React testing</P>
              </Rows>
            </Cols>
          </Main>
        </Rows>
      </Center>
      <Center>
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
                <Emoji>😕</Emoji>
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
      </Center>
    </Pres>
  </ComponentState>
);
