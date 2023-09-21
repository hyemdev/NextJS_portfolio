import Link from "next/link";

export default function Header() {
  return (
    <>
      <h3>헤더입니다</h3>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">hyem's dev portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/index" className="mr-5 hover:text-gray-900">
              home
            </Link>
            <Link href="/aboutMe" className="mr-5 hover:text-gray-900">
              profile
            </Link>
            <Link href="/project" className="mr-5 hover:text-gray-900">
              portfolio
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
