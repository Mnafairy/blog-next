export const Trending = ({ trendings }) => {
  return (
    <div className="flex flex-wrap w-[1220px] m-auto gap-5">
      {trendings.map((trending) => (
        <div className="w-[289px] h-80 relative">
          <img
            className="absolute w-[289px] h-80 object-cover z-10 rounded-xl"
            src={trending.cover_image}
            alt=""
          />
          <div className="absolute w-[230px] h-[75px] z-20 top-40 left-7">
            <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-white bg-[#4B6BFB] font-medium text-xs ">
              Technology
            </button>
            <p className="text-lg font-semibold text-white">{trending.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
