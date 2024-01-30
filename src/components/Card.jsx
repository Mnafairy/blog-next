export const Card = ({ blogs }) => {
  return (
    // <div className="Card w-[390px] h-[476px] flex flex-col gap-4 rounded-xl p-4 border border-[#E8E8EA]">
    //   <div className="h-60 w-[360px] ">
    //     <img
    //       className="h-60 w-[360px] object-fit rounded-md"
    //       src={blogs.cover_image}
    //       alt=""
    //     />
    //   </div>
    //   <div className="p-2 flex flex-col gap-5 ">
    //     <div>
    //       <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] font-medium text-sm ">
    //         Technology
    //       </button>
    //       <p className="font-semibold text-2xl text-[#181A2A]">{blogs.title}</p>
    //     </div>
    //     <p className="text-[#97989F] ">
    //       {new Date(blogs.created_at).toLocaleDateString()}
    //     </p>
    //   </div>
    // </div>
    <div className="w-[289px] h-80 relative">
      <img
        className="absolute w-[289px] h-80 object-cover z-10 rounded-xl"
        src="a.png"
        alt=""
      />
      <div className="absolute w-[230px] h-[75px] z-20 top-40 left-7">
        <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-white bg-[#4B6BFB] font-medium text-xs ">
          Technology
        </button>
        <p className="text-lg font-semibold text-white">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
      </div>
    </div>
  );
};
