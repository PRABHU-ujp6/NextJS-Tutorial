import PostsGrid from "./post-grid";
import classes from "./all-posts.module.css";

export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
