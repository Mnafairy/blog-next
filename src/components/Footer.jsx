import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MetablogIcon,
  TwitterIcon,
} from "@/components/icons/icon";
import Link from "next/link";

export const Footer = () => (
  <div className="bg-[#F6F6F7]">
    <div className="w-[1220px] m-auto flex flex-col gap-[25px] py-16 text-[#3B3C4A]">
      <div className="flex gap-5 items-start ">
        <div className="flex flex-col gap-6 w-[289px]">
          <div className="flex flex-col gap-3 w-[275px]">
            <p className="font-semibold text-lg">About</p>
            <p className="text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#181A2A]">
              Email :{" "}
              <span className="text-[#3B3C4A]">info@jstemplate.net</span>
            </p>
            <p className="text-[#181A2A]">
              Phone :<span className="text-[#3B3C4A]"> 880 123 456 789</span>
            </p>
          </div>
        </div>
        <div className="w-[521px] flex justify-center">
          <div className=" flex flex-col items-start gap-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex gap-6">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
      <div className="py-8 flex gap-16 justify-between border-t border-[#DCDDDF]">
        <div className="flex gap-2.5">
            <MetablogIcon />
          <div className="flex flex-col">
            <p className=" text-xl">
              Meta<span className="text-[#141624] font-extrabold">Blog</span>
            </p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
);
