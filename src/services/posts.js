// Helper functions
const delay = async (timeout) => {
  await new Promise((resolve) => setTimeout(resolve, timeout));
};

const getNextId = () => {
  const data = JSON.parse(localStorage.getItem("posts-mock"));

  const nextId = data[data.length - 1].id + 1;
  return nextId;
};

const setupMockData = () => {
  // Mock data
  let POSTS_MOCKS = [
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

  const data = localStorage.getItem("posts-mock");
  if (!data) localStorage.setItem("posts-mock", JSON.stringify(POSTS_MOCKS));
};
setupMockData();

// Mock service functions
export const getPosts = async () => {
  await delay(200); // .2s delay, to simulate real HTTP request

  console.log(`Service "getPosts" triggered!`);
  const data = JSON.parse(localStorage.getItem("posts-mock"));
  return data;
};

export const getPost = async (id) => {
  await delay(200); // .2s delay, to simulate real HTTP request

  console.log(`Service "getPost" triggered!`);
  const data = JSON.parse(localStorage.getItem("posts-mock"));

  return data.find((p) => p.id == id);
};

export const addPost = async (post) => {
  await delay(200); // .2s delay, to simulate real HTTP request

  console.log(`Service "addPost" triggered!`);
  const data = JSON.parse(localStorage.getItem("posts-mock"));
  const formattedPost = { id: getNextId(), ...post };
  localStorage.setItem("posts-mock", JSON.stringify([...data, formattedPost]));

  return formattedPost;
};
