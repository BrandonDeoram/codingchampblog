import Head from "next/head";
import { getPosts } from "../services";
import { PostCard, Categories, PostWidget } from "../components";
import FeaturedPosts from "@/sections/FeaturedPost";
export default function Home({ posts }) {
  return (
    <div className="sm:container sm:mx-auto sm:px-10 mb-8 mx-5">
      <h1 className="sm:text-2xl mb-4 font-semibold pb-4 text-xl">
        Featured Posts
      </h1>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
