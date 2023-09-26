import Link from "next/link";
import DarkmodeToggle from "./darkmodeToggle";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="head-wrap">
      <header className="text-gray-100 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-semibold">
              <FontAwesomeIcon icon={faThumbsUp} /> hyem's dev portfolio
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-200">
              HOME
            </Link>
            <Link href="/aboutMe" className="mr-5 hover:text-gray-200">
              PROFILE
            </Link>
            <Link href="/study" className="mr-5 hover:text-gray-200">
              STUDY
            </Link>
            <Link href="/project" className="mr-5 hover:text-gray-200">
              PORTFOLIO
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-200">
              CONTACT
            </Link>
          </nav>
          {/* 다크모드 토글버튼 */}
          {/* <DarkmodeToggle /> */}
        </div>
      </header>
    </div>
  );
}
