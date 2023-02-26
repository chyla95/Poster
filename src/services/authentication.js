// Helper functions
const delay = async (timeout) => {
  await new Promise((resolve) => setTimeout(resolve, timeout));
};

// Mock service functions
export const signIn = async (username, password) => {
  await delay(200); // .2s delay, to simulate real HTTP request

  if (username !== "TestUser") return null;
  if (password !== "TestPassword") return null;

  const data = {
    token: "ey.XYZ",
  };

  return data;
};

export const getUser = async (token) => {
  await delay(200); // .2s delay, to simulate real HTTP request

  if (token !== "ey.XYZ") return null;

  const data = {
    userId: 1,
    username: "TestUser",
  };

  return data;
};
