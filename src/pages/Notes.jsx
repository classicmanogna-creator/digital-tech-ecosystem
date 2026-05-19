import { useState, useContext } from "react";
import { AppContext } from "../context/appContext";
import "./notes.css";

const Notes = () => {
  const { posts, addPost, removePost, clearPosts } = useContext(AppContext);
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text.trim()) return;
    addPost(text);
    setText("");
  };

  return (
    <div className="community-container">
      <div className="community">
        <h2>Notes</h2>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note..."
        />

        <button onClick={handlePost}>Post</button>

        {/* ✅ Clear All Button */}
        {posts.length > 0 && (
          <button className="clear-btn" onClick={clearPosts}>
            Clear All
          </button>
        )}

        {/* ✅ Notes List */}
        {posts.map((p, i) => (
          <div className="note-card" key={i}>
            <p>{p}</p>
            <button
              className="delete-btn"
              onClick={() => removePost(i)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;