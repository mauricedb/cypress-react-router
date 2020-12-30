import { Path, LocationState } from 'history';

declare global {
  namespace Cypress {
    interface Chainable {
      historyPush(path: Path, state?: LocationState): Chainable;
      historyReplace(path: Path, state?: LocationState): Chainable;
    }
  }
}

export const addReactRouterHistoryCommand = () => {
  Cypress.Commands.add(
    'historyPush',
    { prevSubject: false },
    (path: Path, state?: LocationState) => {
      cy.window().then(win => {
        win.cyHistory.push(path, state);
      });
    }
  );

  Cypress.Commands.add(
    'historyReplace',
    { prevSubject: false },
    (path: Path, state?: LocationState) => {
      cy.window().then(win => {
        win.cyHistory.replace(path, state);
      });
    }
  );
};
