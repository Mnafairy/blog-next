const Blog = ({ blogs }) => {
  console.log("blogs:", blogs);
  return (
    <div>
      <div className="w-[1220px] m-auto flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-2xl text-[#181A2A]">All Blog Post</h2>
          <div className="flex gap-5">
            <a href="">All</a>
            <a href="">Design</a>
            <a href="">Travel</a>
            <a href="">Fashion</a>
            <a href="">Technology</a>
            <a href="">Branding</a>
          </div>
        </div>
        <div className="flex flex-wrap  gap-5">
          {blogs.map((blog) => (
            <div className="Card w-[390px] h-[476px] flex flex-col gap-4 rounded-xl p-4 border border-[#E8E8EA]">
              <div>
                <img
                  className="h-60 w-[360px] object-fit rounded-md"
                  src={blog.cover_image}
                  alt=""
                />
              </div>
              <div className="p-2 flex flex-col gap-5">
                <div>
                  <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] font-medium text-sm ">
                    Technology
                  </button>
                  <p className="font-semibold text-2xl text-[#181A2A]">
                    {blog.title}
                  </p>
                </div>
                <p className="text-[#97989F] ">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
export const getStaticsProps = async () => {
  const blog = await fetch("https://dev.to/api/articles?page=1&");
  const blogs = await blog.json();
  console.log(blogs);
  // const path=blogs[0].path;
  return {
    props: { blogs },
  };
};
