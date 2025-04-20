import { describe, it, expect, vi } from "vitest";
import { fetchUser } from "../../lib/fetchUser";

describe("fetchUser", () => {
  it("should successfully retrieve and return user data", async () => {
    // Define mock user data
    const mockUserData = {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    // Mocke the fetch function globally
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockUserData,
    });

    // Call the fetchUser function
    const userData = await fetchUser();

    // Check if the fetch function was called with the correct URL
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/3"
    );

    // Check if the fetch function was called only once
    expect(userData).toEqual(mockUserData);
  });
});
