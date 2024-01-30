import { Blogs, Trending, Highlight } from "@/components";
const Home = ({ blogs, highlights, trendings }) => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Highlight highlights={highlights} />
      <Trending trendings={trendings} />
      <Blogs blogs={blogs} />
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const highlight = await fetch("https://dev.to/api/articles?top=5&per_page=4");
  const highlights = await highlight.json();
  const trending = await fetch("https://dev.to/api/articles?top=5&per_page=4");
  const trendings = await trending.json();
  const blog = await fetch("https://dev.to/api/articles?per_page=15");
  const blogs = await blog.json();

  return { props: { blogs, highlights, trendings } };
};
