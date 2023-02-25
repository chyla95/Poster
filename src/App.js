import styles from "./App.module.css";
import Posts from "./components/Posts/Posts";
import AddPostModal from "./components/General/Overlays/Modals/AddPostModal";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [isAddPostModalVisible, setIsAddPostModalVisible] = useState(false);

  const showAddPostModal = (event) => {
    setIsAddPostModalVisible(true);
  };

  const hideAddPostModal = (event) => {
    setIsAddPostModalVisible(false);
  };

  return (
    <>
      <Header showAddPostModal={showAddPostModal} />
      <main>
        <AddPostModal
          isVisible={isAddPostModalVisible}
          hideAddPostModal={hideAddPostModal}
        />
        <Posts />
      </main>
    </>
  );
}

export default App;
