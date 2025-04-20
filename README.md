# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

### Testing with Vitest

**Unit Testing**

```js
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import Component from "Component";

// EXAMPLE APPROACH

// describe is a function that groups related tests
describe("Counter", () => {
  // before all tests
  beforeEach(() => {
    render(<Component />);
  });
  // after all tests
  afterEach(() => {
    cleanup();
  });

  // it is a function that defines a test case
  it("default counter value", () => {
    const el = screen.getByText("Count: 0");
    expect(el).toBeInTheDocument();
  });

  it("increment counter value", async () => {
    // getByText is a query method that returns the first matching element
    // getByText is the nethod to get the element by its text content
    const incButton = screen.getByText("increment");
    // userEvent is a library that simulates user events
    // await for the user event to be completed
    await userEvent.click(incButton);
    // then check if the element is in the document
    const element = screen.getByText("Count: 1");
    // toBeInTheDocument is a matcher that checks if the element is in the document
    expect(element).toBeInTheDocument();
  });
});
```

```js
// EXAMPLE APPROACH

// Simple sum function calculating two numbers
const sum = (a: number, b: number) => {
  return a + b;
};

describe("all components", () => {
  // before all tests
  beforeEach(() => {
    render(<Button>hello world</Button>);
  });
  // after all tests
  afterEach(() => {
    cleanup();
  });
  // expect is a method wich expecting a result based on the function givin
  it("testing something", () => {
    // expect is a function that takes a value and returns an object with methods for making assertions
    // toBe is a matcher that checks if the value is equal to the expected value
    expect(sum(2, 5)).toBe(7);
  });

  it("button show text", () => {
    // test the content of the button
    const el = screen.getByText("hello world");
    expect(el).toBeInTheDocument();
  });
});
```
