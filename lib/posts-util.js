import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // console.log("ps", postSlug)
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  // console.log("pd", postData)

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // console.log("ap", allPosts)

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  // console.log("sp", sortedPosts)
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  // console.log("ap", allPosts)

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  // console.log("fp", featuredPosts)

  return featuredPosts;
}
