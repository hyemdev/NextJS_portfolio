import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { AiOutlineAntDesign, AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoFirebase,
} from "react-icons/bi";
import { TbBrandRedux, TbBrandVscode } from "react-icons/tb";
import {
  SiRecoil,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";
import { BsFillBootstrapFill, BsFiletypeScss, BsGit } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
          책임감있는 프론트엔드 개발자 <b>최혜미</b> 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">i'm hyem dev</p>
        <div className="flex w-full md:justify-start justify-center items-end">
          <div className="relative md:w-full lg:w-full xl:w-1/2 w-2/4">
            <div className="flex gap-5px text-3xl	text-gray-200 ">
                <FaReact /> <BiLogoJavascript /> <BiLogoTypescript />
                <TbBrandRedux /> <SiRecoil /> <SiNextdotjs />
            
                <AiOutlineAntDesign /> <BsFillBootstrapFill /> <SiTailwindcss />
                <SiStyledcomponents /> <BsFiletypeScss /> <BiLogoCss3 />
          
                <AiFillHtml5 /> <TbBrandVscode /> <BsGit /> <AiFillGithub />
                <FiFigma /> <BiLogoFirebase />
              </div>
          </div>
          <div>
            <Image
              src="/image/profile2.png"
              alt="project"
              // layout="fix"
              width={200}
              height={200}
            />
            <Link href="/project" className="mr-5 hover:text-gray-200">
              <button className="inline-flex text-white bg-slate-500 dark:bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 dark:hover:bg-indigo-900 rounded text-lg">
                프로젝트 보러가기
              </button>
            </Link>
          </div>
        </div>
        <p className="flex-auto text-md mt-2 text-gray-400 mb-8 w-full">
          <SiNextdotjs /> 해당 사이트는 Next.js로 제작되었습니다.
        </p>
      </div>
      {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div> */}
    </>
  );
}
