import Link from "next/link";
export const Navigationbar = () => {
  return (
    <div className="flex flex-col gap-8 font-bold text-[#495057]">
      <h2 className="font-bold text-2xl text-[#181A2A]">All Blog Post</h2>
      <div className="flex gap-5">
        <Link href={"/blog"} className="text-[#D4A373]">
          All
        </Link>
        <Link href={"/blog/design"}>Design</Link>
        <Link href={"/blog/travel"}>Travel</Link>
        <Link href={"/blog/fashion"}>Fashion</Link>
        <Link href={"/blog/technology"}>Technology</Link>
        <Link href={"/blog/branding"}>Branding</Link>
      </div>
    </div>
  );
};
