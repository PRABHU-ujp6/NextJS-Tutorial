import PostsGrid from "../posts/post-grid";
import classes from "./featured-posts.module.css";

export default function FeaturedPosts(props) {
  return (
    <div className={classes.latest}>
      <h2>Featured Post</h2>

      <PostsGrid posts={props.posts} />
    </div>
  );
}
