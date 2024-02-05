import { Blogs, Trending, Highlight } from "@/components";
import { useState, useEffect } from "react";
const Home = ({ blogs, highlights, trendings }) => {
  const [article, setArticle] = useState([]);
  const [trending, setTrending] = useState([]);
  const [highlight, setHighglight] = useState([]);
  useEffect(() => {
    async function getArticle() {
      const res = await fetch("http://localhost:4000/api/blogs");
      const data = await res.json();
      console.log(data);
      setArticle(data);
    }
    getArticle();
    async function getTrending() {
      const res = await fetch("http://localhost:4000/api/trendings");
      const data = await res.json();
      setTrending(data);
    }
    getTrending();
    async function getHighlight() {
      const res = await fetch("http://localhost:4000/api/trendings");
      const data = await res.json();
      setHighglight(data);
    }
    getHighlight();
  }, []);
  return (
    <main className="flex flex-col gap-[100px]">
      <p>{article?.title}</p>
      <Highlight highlights={highlight} />
      <Trending trendings={trending} />
      <Blogs blogs={article} />
    </main>
  );
};
export default Home;

export const getStaticProps = async () => {
  const highlight = await fetch("https://dev.to/api/articles?top=4&per_page=4");
  const highlights = await highlight.json();
  const trending = await fetch(
    "https://dev.to/api/articles?state=rising&per_page=4"
  );
  const trendings = await trending.json();
  const blog = await fetch("https://dev.to/api/articles?page=4&per_page=15");
  const blogs = await blog.json();
  return { props: { blogs, highlights, trendings } };
};
