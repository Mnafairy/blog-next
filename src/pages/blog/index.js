import { Navigationbar, BlogCard } from "@/components";
const Page = ({ data }) => {
  console.log("blog:", data);
  return (
    <div className="w-[1220px] m-auto flex flex-col gap-8">
      <Navigationbar />
      <div className="flex flex-wrap  gap-5">
        {data.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default Page;

export async function getServerSideProps(context) {
  const { query } = context;
  const response = await fetch("https://dev.to/api/articles?per_page=15");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
