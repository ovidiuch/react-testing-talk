import { string } from 'prop-types';
import React from 'react';
import Prism from 'prismjs';
import { PrismStyle } from './PrismStyle';

export function CodeSample({ code }) {
  // Generate syntax highlighting using Prism
  const codeMarkup = Prism.highlight(code, Prism.languages.jsx);

  return (
    <PrismStyle>
      <pre className="code-jsx">
        <code
          dangerouslySetInnerHTML={{
            __html: codeMarkup
          }}
        />
      </pre>
    </PrismStyle>
  );
}

CodeSample.propTypes = {
  code: string.isRequired
};
