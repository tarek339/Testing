import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

// user profile user id as a prop
// json place holder api

// describe is a function that groups related tests
describe("Counter", () => {
  // before all tests
  beforeEach(() => {
    render(<Counter />);
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
    await userEvent.click(incButton);
    const element = screen.getByText("Count: 1");
    // toBeInTheDocument is a matcher that checks if the element is in the document
    expect(element).toBeInTheDocument();
  });

  it("decrement counter value", async () => {
    const decButton = screen.getByText("decrement");
    await userEvent.click(decButton);
    const element2 = screen.getByText("Count: -1");
    expect(element2).toBeInTheDocument();
  });
});
