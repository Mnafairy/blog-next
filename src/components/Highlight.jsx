export const Highlight = ({ highlights }) => {
  return (
    <div className="carousel rounded-xl flex flex-wrap w-[1220px] m-auto gap-5">
      <div className="carousel w-full">
        {highlights.map((highlight, key) => (
          <div
            id={key}
            className="carousel-item flex-col items-end relative w-full"
          >
            <img src={highlight.cover_image} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
            <div>
              <a href={key - 1} className="btn btn-circle">
                ❮
              </a>
              <a href={key + 1} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
