import { range } from 'lodash';
import styled from 'styled-components';
import React from 'react';
import { Rows, FullScreen } from '../../../shared/style/layout';
import { H2 } from '../../../shared/style/text';
import { StepsBase, FadeStep } from '../../shared/steps';
import { UnchangedCategory, AddedCategory, RemovedCategory } from './Category';
import { getUnchangedCats, getAddedCats, getRemovedCats } from './shared';

export function createTestDiff({ tests, prevTests }) {
  const tightUnchanged = getUnchangedCats({
    tests: tests.tight,
    prevTests: prevTests.tight
  });
  const tightAdded = getAddedCats({
    tests: tests.tight,
    prevTests: prevTests.tight
  });
  const tightRemoved = getRemovedCats({
    tests: tests.tight,
    prevTests: prevTests.tight
  });

  const numTightCats =
    tightUnchanged.length + tightAdded.length + tightRemoved.length;
  // This is hardcoded for simplicify
  const numLooseCats = 1;

  return class TestDiff extends StepsBase {
    static getNumSteps() {
      return (
        // Headers
        2 +
        numTightCats +
        numLooseCats +
        // Overview
        1
      );
    }

    render() {
      const { step } = this.props;

      const finalStep = TestDiff.getNumSteps() - 1;
      const tightSteps = range(
        tightUnchanged.length + tightAdded.length + tightRemoved.length + 1
      );
      const looseSteps = [tightSteps.length, tightSteps.length + 1];

      return (
        <Container>
          <Side>
            <FadeStep
              step={step}
              appearAt={tightSteps[0]}
              brightAt={[...tightSteps, finalStep]}
            >
              <SideTitle>
                <em>Tight</em> units
              </SideTitle>
            </FadeStep>
            <SideContent>
              {tightUnchanged.map((cat, idx) => {
                const appearAt = tightSteps[1] + idx;

                return (
                  <FadeStep
                    key={cat}
                    step={step}
                    appearAt={appearAt}
                    brightAt={[appearAt, finalStep]}
                  >
                    <UnchangedCategory
                      name={cat}
                      tests={tests.tight[cat]}
                      showTests={step === appearAt}
                    />
                  </FadeStep>
                );
              })}
              {tightAdded.map((cat, idx) => {
                const appearAt = tightSteps[1] + tightUnchanged.length + idx;

                return (
                  <FadeStep
                    key={cat}
                    step={step}
                    appearAt={appearAt}
                    brightAt={[appearAt, finalStep]}
                  >
                    <AddedCategory
                      name={cat}
                      tests={tests.tight[cat]}
                      showTests={step === appearAt}
                    />
                  </FadeStep>
                );
              })}
              {tightRemoved.map((cat, idx) => {
                const appearAt =
                  tightSteps[1] +
                  tightUnchanged.length +
                  tightAdded.length +
                  idx;

                return (
                  <FadeStep
                    key={cat}
                    step={step}
                    appearAt={appearAt}
                    brightAt={[appearAt, finalStep]}
                  >
                    <RemovedCategory
                      name={cat}
                      tests={prevTests.tight[cat]}
                      showTests={step === appearAt}
                    />
                  </FadeStep>
                );
              })}
            </SideContent>
          </Side>
          <Side>
            <FadeStep
              step={step}
              appearAt={looseSteps[0]}
              brightAt={[...looseSteps, finalStep]}
            >
              <SideTitle>
                <em>Loose</em> units
              </SideTitle>
            </FadeStep>
            <SideContent>
              <FadeStep
                step={step}
                appearAt={looseSteps[1]}
                brightAt={[looseSteps[1], finalStep]}
              >
                <UnchangedCategory
                  name="loginForm"
                  tests={tests.loose.index}
                  showTests={true}
                />
              </FadeStep>
            </SideContent>
          </Side>
        </Container>
      );
    }
  };
}

const Container = styled(FullScreen)`
  height: 100vh;
`;

const Side = styled(Rows)`
  height: 100vh;
  flex: 0;
  padding: 0 96px;
`;

const SideTitle = styled(H2)`
  height: 20vh;
  line-height: 20vh;
`;

const SideContent = styled(Rows)`
  height: 85vh;
  align-items: center;
`;
