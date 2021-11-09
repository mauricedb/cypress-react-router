import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { CypressHistorySupport } from '../src';

describe('CypressHistorySupport', () => {
  it("doesn't add cyNavigate when rendering normally", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <CypressHistorySupport />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);

    expect((window as any).cyNavigate).toBeUndefined();
  });
});
