export const fetchUser = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/3`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error(`Error fetching user: ${error}`);
  }
};
