import { shape, objectOf, array } from 'prop-types';
import React, { Fragment, Component } from 'react';
import { Cols, ColSeparator } from '../../shared/style/layout';

export class TestComparison extends Component {
  static propTypes = {
    tests: shape({
      tight: objectOf(array),
      loose: objectOf(array)
    }).isRequired
  };

  render() {
    const { tight, loose } = this.props.tests;

    return (
      <Cols>
        <div>
          <h2>Tight tests</h2>
          {Object.keys(tight).map(cat => {
            return (
              <Fragment key={cat}>
                <p>
                  <strong>{cat}</strong>
                </p>
                <ul>
                  {tight[cat].map(test => (
                    <li key={test}>{test}</li>
                  ))}
                </ul>
              </Fragment>
            );
          })}
        </div>
        <ColSeparator />
        <div>
          <h2>Loose tests</h2>
          <ul>
            {loose.index.map(test => (
              <li key={test}>{test}</li>
            ))}
          </ul>
        </div>
      </Cols>
    );
  }
}
