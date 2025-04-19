import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Button from "./Button";

const sum = (a: number, b: number) => {
  return a + b;
};

describe("all components", () => {
  it("testing something", () => {
    expect(sum(2, 5)).toBe(7);
  });

  it("button show text", () => {
    render(<Button>hello world</Button>);
    const el = screen.getByText("hello world");
    expect(el).toBeInTheDocument();
  });
});
