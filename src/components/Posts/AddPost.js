import { useState } from "react";
import { addPost } from "../../services/posts";
import styles from "./AddPost.module.css";

function AddPost(props) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onUsernameChangeHandler = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const onMessageChangeHandler = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const data = {
      author: username,
      message,
    };

    await addPost(data);
    props.onSubmit();
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmitHandler}>
      <h2>Add Post</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          required
          onChange={onUsernameChangeHandler}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          rows={3}
          onChange={onMessageChangeHandler}
          value={message}
        />
      </div>
      <div className={`${styles["actions"]}`}>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default AddPost;
