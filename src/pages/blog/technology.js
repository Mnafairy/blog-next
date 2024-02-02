import { Navigationbar, BlogCard } from "@/components";
import { useState } from "react";

const Page = ({ data }) => {
  const [articles, setArticles] = useState(data);
  const [pageNumber, setPageNumber] = useState(1);
  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?tag=technology&per_page=6&page=${pageNumber}`
    );
    const datas = await response.json();
    setArticles([...articles, ...datas]);
    setPageNumber(pageNumber + 1);
  }
  return (
    <div className="w-[1220px] m-auto flex flex-col gap-8">
      <Navigationbar />
      <div className="flex flex-wrap  gap-5">
        {articles.map((blog) => (
          <BlogCard blog={blog} id={blog.id} />
        ))}
      </div>
      <div className="m-auto">
        <button
          className="border border-[#696A75] rounded-lg py-2.5 px-2.5 text-[#696A75]"
          onClick={loadMoreHandler}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
export default Page;
export async function getServerSideProps(context) {
  const response = await fetch(
    "https://dev.to/api/articles?tag=technology&per_page=15"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
