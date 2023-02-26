// Helper functions
const delay = async (timeout) => {
  await new Promise((resolve) => setTimeout(resolve, timeout));
};

const getNextId = () => {
  const nextId = POSTS_MOCK[POSTS_MOCK.length - 1].id + 1;
  return nextId;
};

// Mock data
let POSTS_MOCK = [
  {
    id: 0,
    author: "Steven O",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    author: "Teri M",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    author: "Margaret M",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    author: "Malvin S",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

// Mock service functions
export const getPosts = async () => {
  await delay(1000); // 1s delay, to simulate real HTTP request

  console.log(`Service "getPosts" triggered!`);
  return POSTS_MOCK;
};

export const getPost = async (id) => {
  await delay(1000); // 1s delay, to simulate real HTTP request

  console.log(`Service "getPost" triggered!`);
  return POSTS_MOCK.find((p) => p.id === id);
};

export const addPost = async (post) => {
  await delay(1000); // 1s delay, to simulate real HTTP request

  console.log(`Service "addPost" triggered!`);
  const formattedPost = { id: getNextId(), ...post };
  POSTS_MOCK.push(formattedPost);
  return formattedPost;
};
