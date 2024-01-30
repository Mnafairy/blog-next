export const Blogs = ({ blogs }) => {
  return (
    <div className="flex flex-wrap w-[1220px] m-auto gap-5">
      {blogs.map((blog) => (
        <div className="Card w-[390px] h-[476px] flex flex-col gap-4 rounded-xl p-4 border border-[#E8E8EA]">
          <div className="h-60 w-[360px] ">
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
  );
};
