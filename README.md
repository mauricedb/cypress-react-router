# Cypress History Support

# Installation:

`npm install cypress-react-router`

# Usage:

Adds `cy.routerNavigate()` command to the Cypress object to navigate using the React Router Dom `useNavigate()` API. The command take the `to` and an optional `options` object as parameter.

## With TypeScript

Typings should be added as follows in tsconfig.json:

```json
{
  "compilerOptions": {
    "lib": ["es5", "dom"],
    "target": "es5",
    "types": ["cypress", "cypress-react-router"]
  },
  "include": ["**/*.ts"]
}
```

## Should you use this package?

If you are wondering if you should use this package the most likely answer is no.

In most cases you should do something like:

```JavaScript
cy.visit('/')
cy.get('[href="/article/42"]').click();
```

Or use some other `cy.get()` selector, or even better `cy.findByRole('link', { name: 'Article 42' })` from [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/).

So if you should not use this normally why does it exist?

In some cases you need to do setup work and the navigate to some well know route with previously setup data. So you might do something like:

```JavaScript
cy.visit('/');
cy.login();
cy.visit('/article/42');
```

The problem here is that the second `cy.visit()` reloads the application from the server. And if your application is a Single Page Application or SPA using React Router Dom you have just lost all state setup with the call to your custom `cy.login()` command.

So instead of calling `cy.visit()` a second time we want to do a `history.push()` like you would in the React application and what happens if you click on a `<Link />` component in the browser. And that is what this package will let you do.

## Example usage:

In the file containing your `<BrowserRouter />` or `<HashRouter />` add the `<CypressHistorySupport />`

```JavaScript
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CypressHistorySupport } from 'cypress-react-router';

const App = () => {
  return (
    <BrowserRouter>
      <CypressHistorySupport />
      {/* Your other components */}
    </BrowserRouter>
  );
};
```

In `/cypress/support/commands.js` add support for the router commands

```JavaScript
import 'cypress-react-router/add-commands';
```

Then in your Cypress tests use the `cy.routerNavigate()` command as needed.

```JavaScript
context('Open secure articles', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login();
  });

  it('navigates to article 42 without reload', () => {
    cy.routerNavigate('/article/42');

    // Do whatever you need to do
  });
});
```

## Versioning

**Make sure to use the correct version of this library for you!**

Version 1.* of this package is intended for use with React Router DOM version 5. Use the `cy.historyPush()` and `cy.historyReplace()` commands to execute the respective `history.push()` and `history.replace()` functions.

Version 2.* of this package is intended for use with React Router DOM version 6 which has an different API. Use the `cy.routerNavigate()` command to execute the `navigate()` function.