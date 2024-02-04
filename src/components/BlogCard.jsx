import Link from "next/link";
export const BlogCard = ({ blog, id }) => {
  return (
    <Link href={`/blog/articles/${id}`}>
      <div className="Card w-[390px] h-[488px] flex flex-col gap-4 rounded-xl p-4 border border-[#E8E8EA]">
        <div>
          <img
            className="h-60 w-[360px] object-fit rounded-md"
            src={blog.social_image}
            alt=""
          />
        </div>
        <div className="p-2 flex flex-col gap-5 h-[200px] justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              {/* {blog.tag_list.map((e) => ( */}
              <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] font-medium text-sm ">
                {blog.tag_list[0]}
              </button>
              {/* ))} */}
            </div>
            <p className="font-semibold text-xl text-[#181A2A]">{blog.title}</p>
          </div>
          <div className="flex gap-5 text-[#97989F] items-center">
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 rounded-full">
                <img
                  className="w-9 h-9 rounded-full"
                  src={blog.user.profile_image}
                  alt=""
                />
              </div>
              <p>{blog.user.name}</p>
            </div>
            <p>{new Date(blog.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
