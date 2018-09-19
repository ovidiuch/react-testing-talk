import { arrayOf, element, string } from 'prop-types';
import styled from 'styled-components';
import React, { Children } from 'react';
import { Rows, Cols } from '../../shared/style/layout';
import { P } from '../../shared/style/text';

export function Box({ children, title }) {
  return (
    <BoxContainer>
      <BoxTitle>{title}</BoxTitle>
      {children && (
        <BoxChildren>
          {Children.toArray(children).reduce(
            (acc, child, idx) =>
              idx === 0
                ? [...acc, child]
                : [...acc, <ChildSeparator key={`separator-${idx}`} />, child],
            []
          )}
        </BoxChildren>
      )}
    </BoxContainer>
  );
}

Box.propTypes = {
  title: string,
  children: arrayOf(element)
};

const BoxContainer = styled(Rows)`
  background: rgba(43, 81, 173, 0.15);
  padding: 16px;
`;

const BoxTitle = styled(P)`
  margin: 0;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.5);
`;

const BoxChildren = styled(Cols)`
  margin-top: 16px;
`;

const ChildSeparator = styled.div`
  width: 16px;
`;
