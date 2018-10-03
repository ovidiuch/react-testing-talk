/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import { Pres } from './Pres';

const container = document.createElement('root');
document.body.appendChild(container);

render(<Pres />, container);
