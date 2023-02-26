import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addPost } from "../../services/posts";
import styles from "./AddPost.module.css";

function AddPost(props) {
  const { token } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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

    await addPost(data, token);
    navigate("/");
    if (props.onSubmit) props.onSubmit();
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmitHandler}>
      <h2>Add Post</h2>
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
