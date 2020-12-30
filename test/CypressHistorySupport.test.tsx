import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CypressHistorySupport } from '../src';

describe('CypressHistorySupport', () => {
  it("doesn't add cyHistory when rendering normally", () => {
    const div = document.createElement('div');
    ReactDOM.render(<CypressHistorySupport />, div);
    ReactDOM.unmountComponentAtNode(div);

    expect((window as any).cyHistory).toBeUndefined();
  });
});
