import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_POST = [
//   { slug: 'getting-started-with-next',
//     title: "Next JS",
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next JS is a ReactJS Framework.',
//     date: '2025-07-11',
//   },
//   { slug: 'getting-started-with-next',
//     title: "Next JS",
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next JS is a ReactJS Framework.',
//     date: '2025-07-11',
//   },
//   { slug: 'getting-started-with-next',
//     title: "Next JS",
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next JS is a ReactJS Framework.',
//     date: '2025-07-11',
//   },
//   { slug: 'getting-started-with-next',
//     title: "Next JS",
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next JS is a ReactJS Framework.',
//     date: '2025-07-11',
//   },

// ]

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
