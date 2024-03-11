import { Navigationbar } from ".";
import Link from "next/link";
export const Blogs = ({ blogs }) => {
  return (
    <div className="w-[1220px] m-auto flex flex-col gap-8">
      <Navigationbar />
      <div className="flex flex-wrap gap-5">
        {blogs.map((blog) => (
          <Link href={`/blog/articles/${blog.id}`}>
            <div className="Card w-[390px] h-[500px]  flex flex-col  gap-4 rounded-xl p-4 border border-[#E8E8EA]">
              <div>
                <img
                  className="h-60 w-[360px] object-fit rounded-md"
                  src={blog.social_image}
                  alt=""
                />
              </div>
              <div className="p-2 flex flex-col h-[200px] gap-5 justify-between">
                <div>
                  <div className="flex gap-2 flex-wrap">
                    {/* {blog.tag_list.map((e) => ( */}
                    <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] font-medium text-sm ">
                      {blog.tag_list[0]}
                    </button>
                    {/* ))} */}
                  </div>
                  <p className="font-semibold text-2xl text-[#181A2A] ">
                    {blog.title}
                  </p>
                </div>
                <p className="text-[#97989F] ">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
