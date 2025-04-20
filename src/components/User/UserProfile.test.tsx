import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import UserProfile from "./UserProfile";

// Correct Placement of vi.mock
// Simulated or controlled version of the fetchUser function instead of the real function
// Mock control its output and focus solely on the logic of the tested unit
// Controlling External Dependencies
// Simulating different scenarios and outcomes from external services or modules
// For predictable and robust tests
// Speeding Up Tests by avoiding network requests or database interactions
// Testing Edge Cases and Errors by controlling the return values of mocked dependencies
// Provide the path to the module/function in the string argument
vi.mock("../../lib/fetchUser", () => ({
  // Factory function to create a mock of the fetchUser function
  // vi.fn keep track of how they were called: how many times, with what arguments, and what they returned
  fetchUser: vi.fn(() => Promise.resolve({})), // Mock implementation of fetchUser
}));

describe("UserProfile", () => {
  beforeEach(() => {
    render(<UserProfile />);
  });
  afterEach(() => {
    cleanup();
  });

  it("default user id value", () => {
    const el = screen.getByText("User ID:");
    expect(el).toBeInTheDocument();
  });
});
