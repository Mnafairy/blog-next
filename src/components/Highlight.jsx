export const Highlight = ({ highlights }) => {
  return (
    <div className="rounded-xl flex flex-wrap w-[1220px] object-cover m-auto gap-5">
      <div className="carousel w-full">
        {highlights.map((highlight, key) => (
          <div id={key} className="carousel-item flex-col items-end w-full">
            <div className="w-[1220px] h-[600px] relative">
              <img
                src={highlight.cover_image}
                className=" w-[1220px] h-[600px] object-cover absolute z-10 rounded-xl"
              />
              <div className="w-[598px] h-[252px] absolute z-20 top-[335px] left-[11px] p-10 flex flex-col gap-6 bg-white rounded-xl border border-[#E8E8EA]">
                <div>
                  <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-white bg-[#4B6BFB] font-medium text-sm ">
                    Technology
                  </button>
                  <p className="font-semibold text-3xl text-[#181A2A]">
                    {highlight.title}
                  </p>
                </div>
                <p className="text-[#97989F]">August 20, 2022</p>
              </div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <a
                href={`#${key - 1}`}
                className="flex justify-center items-center w-10 h-10 rounded-md border border-[#696A75]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={17}
                  viewBox="0 0 9 17"
                  fill="none"
                >
                  <path
                    d="M8.5 16L1 8.5L8.5 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={`#${key + 1}`}
                className="flex justify-center items-center w-10 h-10 rounded-md border border-[#696A75]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={17}
                  viewBox="0 0 9 17"
                  fill="none"
                >
                  <path
                    d="M1 1L8.5 8.5L1 16"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
