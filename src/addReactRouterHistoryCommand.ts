import { NavigateFunction, NavigateOptions, To } from 'react-router-dom';

declare global {
  namespace Cypress {
    interface Chainable {
      routerNavigate(to: To, options?: NavigateOptions): Chainable;
    }
  }
}

export const addReactRouterHistoryCommand = () => {
  Cypress.Commands.add(
    'routerNavigate',
    { prevSubject: false },
    (to: To, options?: NavigateOptions) => {
      cy.window()
        .its('cyNavigate')
        .then((navigate: NavigateFunction) => navigate(to, options));
    }
  );
};
