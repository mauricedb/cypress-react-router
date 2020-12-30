import { History } from 'history';

declare global {
  interface Window {
    cyHistory: History<unknown>;
    Cypress: Cypress.Cypress;
  }
}
