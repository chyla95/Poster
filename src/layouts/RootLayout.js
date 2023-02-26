import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const RootLayout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
