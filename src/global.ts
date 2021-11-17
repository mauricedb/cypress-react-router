import { NavigateFunction } from 'react-router';

declare global {
  interface Window {
    cyNavigate: NavigateFunction;
    Cypress: Cypress.Cypress;
  }
}
