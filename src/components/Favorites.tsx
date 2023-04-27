import { posts } from "../db/posts";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { DEL_FROM_FAVOR } from "../redux/type.redux";

function Favorites() {

  const favor_Ids = useSelector(
    (state: any) => state.PostReducer.post_Ids
  );

const dispatch = useDispatch();

const delHandler = (postId: number) => {
  dispatch ({ type: DEL_FROM_FAVOR, payload: postId });
};

  return (
    <div className="home-main">
      <p>Favorites</p>
      <div className="posts-container">
        {posts.map((post, i) => 
        favor_Ids.includes(post.id) && (
          <div key={"fav-" + i} className="post">
            <div className="post-header">
              <p className="author">
                Author: <span className="author-name">{post.author}</span>
              </p>
              <div className="fav-btn">
                <button onClick={() => delHandler(post.id)}>Delete</button>
              </div>
            </div>
            <div className="content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
