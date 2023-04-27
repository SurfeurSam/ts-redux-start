import { posts } from "../db/posts";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAVOR } from "../redux/type.redux";
import { RootState } from "../types/types";

function Home() {
  const dispatch = useDispatch();

  const favor_Ids = useSelector(
    (state: RootState) => state.PostReducer.post_Ids
  );

  const addHandler = (post_Id: number) => {
    dispatch({ type: ADD_TO_FAVOR, payload: post_Id })
  }

  return (
    <div className="home-main">
      <p>Home</p>
      <div className="posts-container">
        {posts.map((post, i) => (
          <div key={"post" + i} className="post">
            <div className="post-header">
              <p className="author">
                Author: <span className="author-name">{post.author}</span>
              </p>
              <div className="fav-btn">
                {!favor_Ids.includes(post.id) && (
                  <button onClick={() => addHandler(post.id)}>Add</button>
                )}
                
              </div>
            </div>
            <div className="content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
