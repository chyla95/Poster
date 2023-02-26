import Posts from "./components/Posts/Posts";
import AddPostModal from "./components/General/Overlays/Modals/AddPostModal";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <Posts />
      </main>
    </>
  );
}

export default App;
