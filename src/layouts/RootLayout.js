import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header/Header";
import { getUser } from "../services/authentication";
import store from "../store/store";

const RootLayout = (props) => {
  const { user } = useLoaderData();
  return (
    <>
      <Header />
      <main>
        <Outlet context={{ user: user }} />
      </main>
    </>
  );
};

export default RootLayout;

export const rootLoader = async () => {
  const { auth } = store.getState();
  // store.dispatch(...)

  const user = await getUser(auth.token);
  console.log("...", user);

  return { user };
};
