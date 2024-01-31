const Page = () => {
  return (
    <div>
      <div className="w-[769px] h-[389px] m-auto px-2.5 pt-[14px] flex flex-col items-start gap-5 ">
        <div className="flex flex-col gap-5">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex py-2.5 gap-[50px]">
          <div className="p-4 flex flex-col items-start gap-2.5">
            <h2>Adress</h2>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
          <div className="p-4 flex flex-col items-start gap-2.5">
            <h2>Contact</h2>
            <p>313-332-8662 info@email.com</p>
          </div>
        </div>
      </div>
      <div className="w-[643px] h-[440px] m-auto pt-[29px] pr-[130xp] pb-[26px] pl-[35px] flex flex-col gap-6">
        <div>Leave a Message</div>
        <div className="flex flex-col gap-5">
          <div>
            <input
              className="py-[14px] px-5"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="py-[14px] px-5"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div>
            <input
              className="py-[14px] px-5"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div>
            <input
              className="py-[14px] px-5"
              type="text"
              placeholder="Write a message"
            />
          </div>
          <div>
            <button className="mb-4 p-2.5 flex justify-center items-center rounded-md text-white bg-[#4B6BFB] font-medium text-sm ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
