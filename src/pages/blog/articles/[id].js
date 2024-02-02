import parse from "html-react-parser";
const Page = ({ data }) => {
  console.log("data:", data);
  console.log(data.body_html);
  return (
    <div className="w-[1220px] m-auto flex flex-col gap-[30px]">
      <div className="font-semibold text-4xl text-[#181A2A]">{data.title}</div>
      <div className="flex gap-4">
        <div className="w-9 h-9 rounded-full">
          <img
            className="w-9 h-9 rounded-full"
            src={data.user.profile_image}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <p>{data.user.name}</p>
          <p>{new Date(data.created_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="w-[1220px] h-[600px] rounded-xl">
        <img
          src={data.social_image}
          className=" w-[1220px] h-[600px] rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4">{parse(data.body_html)}</div>
    </div>
  );
};
export default Page;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
