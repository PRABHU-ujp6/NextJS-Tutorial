import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
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

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Akan's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  // console.log("ft", featuredPosts)

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
