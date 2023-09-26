import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";
import { FaFigma } from "react-icons/fa";

export default function Project() {
  return (
    <Layout>
      <div className="wrap-color px-12">
        <h3 className="text-6xl text-center p-10"> PROJECT </h3>
        <div className="flex m-4">
          <ul className="flex-2 mx-2">
            <li>
              <Image
                src="/image/clone-emons-1.png"
                alt="project"
                // layout="fix"
                width={500}
                height={300}
              />
              {/* <Image
              src="/image/not-todo-respon-main.png"
              alt="project"
              layout="fix"
              width={500}
              height={300}
            /> */}
            </li>
          </ul>
          <ul className="flex-2  mx-2">
            <h4 className="text-2xl font-semibold">미니 협업 프로젝트</h4>
            <li className="text-md text-slate-300 p-2">
              퍼블리싱 스터디를 위한 에몬스 가구(https://www.emons.co.kr) 클론
              코딩 협업 프로젝트 <br />* 브라우저 사이즈별 반응형 적용
            </li>
            <li className="text-md text-slate-300 p-2">
              담당업무 : 파비콘, 이미지 등 리소스 및 SEO적용 <br />- header,
              visual, product, event, footer(responsive) 섹션
            </li>
            <li className="text-md text-slate-200 font-semibold p-2">
              STACK : html, css, javascript, git/github, notion, slack
            </li>
            <li>
              <div className="flex gap-2 text-3xl text-slate-50 p-2">
                <Link
                  href="https://github.com/hyemdev/clone-emons"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  href="https://www.notion.so/EMONS-CLONE-PROJECT-4d63319d6feb4f90a18a2fb520715ba1"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <RxNotionLogo />{" "}
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex m-4">
          <ul className="flex-2  mx-2">
            <li>
              <Image
                src="/image/not-todo-main.jpg"
                alt="project"
                // layout="fix"
                width={500}
                height={300}
              />
              {/* <Image
              src="/image/not-todo-respon-main.png"
              alt="project"
              layout="fix"
              width={500}
              height={300}
            /> */}
            </li>
          </ul>
          <ul className="flex-2  mx-2">
            <h4 className="text-2xl font-semibold">
              1차 일정관리 서비스 제작 협업 프로젝트
            </h4>
            <li className="text-md text-slate-300 p-2">
              Not Todo LIST <br />
              하지 말아야 할 나쁜 버릇을 리스트업 해보고, 그 항목들을 하지
              말았을 때 발생하는 기회 비용을 산출해볼 수 있는 웹용 todolist를
              기획/제작
            </li>
            <li className="text-md text-slate-300 p-2">
              담당업무 : 피그마 작성, 레이아웃 및 페이지 구성, front-end 전체
              페이지 구현 및 반응형 적용
            </li>
            <li className="text-md text-slate-200 font-semibold p-2">
              STACK : React, JavaScript, Axios, Tailwind, Styled/Emotion, Ant
              Design, Html, CSS, Git, Figma
            </li>
            <li>
              <div className="flex gap-2 text-3xl text-slate-50 p-2">
                <Link
                  href="https://github.com/hyemdev/Project--NotTodoList"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  href="https://www.notion.so/hyemdev/Todo-list-Team-Project-cfe7438315e14ab2829ba8b0c7930b0e"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <RxNotionLogo />
                </Link>
                <Link
                  href="https://www.figma.com/file/hCuMLEkCvdCcFwCpIh4qgN/team-project?type=design&node-id=115%3A477&mode=design&t=SI2q1tstLy1fMEHd-1"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <FaFigma />
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex m-4">
          <ul className="flex-2  mx-2">
            <li>
              <Image
                src="/image/winey-user.png"
                alt="project"
                // layout="fix"
                width={500}
                height={300}
              />
              {/* <Image
              src="/image/not-todo-respon-main.png"
              alt="project"
              layout="fix"
              width={500}
              height={300}
            /> */}
            </li>
          </ul>
          <ul className="flex-2  mx-2">
            <h4 className="text-2xl font-semibold">
              2차 픽업 서비스 제작 협업 프로젝트
            </h4>
            <li className="text-md text-slate-300 p-2">
              초보자를 위한 맞춤 와인 서비스 : 구매자 취향에 따른 맞춤 추천
              사용자페이지 구현
            </li>
            <li className="text-md text-slate-300 p-2">
              담당업무 : 사용자 페이지 로그인, 회원가입, 회원정보 수정,
              선호키워드 선택, <br />
              선호키워드 수정, 결제, 결제 완료, 어바웃 페이지 기능 구현
            </li>
            <li className="text-md text-slate-200 font-semibold p-2">
              STACK : React, JavaScript, Redux, Axios, Styled, Ant Design,
              Figma, Git/Github, FramerMotion, Swiper, Prettier, FontAwesome
            </li>
            <li>
              <div className="flex gap-2 text-3xl text-slate-50 p-2">
                <Link
                  href="https://github.com/hyemdev/winey"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  href="https://www.notion.so/hyemdev/2-3-Winey-a37f57c648894d38832dad4f809983c8"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <RxNotionLogo />
                </Link>
                <Link
                  href="https://www.figma.com/file/ttkCdDz7qJxCNRDU346Bbn/%EC%99%80%EC%9D%B8-%ED%94%BD%EC%97%85-%EC%84%9C%EB%B9%84%EC%8A%A4?type=design&node-id=0:1&mode=design&t=F6ukTUlNAjr8jUEe-1"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <FaFigma />
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex m-4">
          <ul className="flex-2 mx-2">
            <li>
              <Image
                src="/image/winey-admin.jpg"
                alt="project"
                // layout="fix"
                width={500}
                height={300}
              />
              {/* <Image
              src="/image/not-todo-respon-main.png"
              alt="project"
              layout="fix"
              width={500}
              height={300}
            /> */}
            </li>
          </ul>
          <ul className="flex-2 mx-2">
            <h4 className="text-2xl font-semibold">
              {" "}
              3차 픽업 서비스 제작 협업 프로젝트
            </h4>
            <li className="text-md text-slate-300 p-2">
              초보자를 위한 맞춤 와인 서비스 : 구매자 취향에 따른 맞춤 추천
              사용자페이지 개선 및 관리자 페이지 구현
            </li>
            <li className="text-md text-slate-300 p-2">
              담당업무 : 사용자페이지 개선작업 - 상품검색, 회원가입 메일인증
              <br />
              관리자 페이지 - 라우터 설정 및 레이아웃 구성, 가입 회원 리스트,
              회원별 상세 내역, 등록 매장 리스트, 매장 신규 등록 및 수정 페이지
              기능 구현
            </li>
            <li className="text-md text-slate-200 font-semibold p-2">
              STACK : React, TypeScript, JavaScript, Redux, Axios, Styled, Ant
              Design, Figma, Git/Github, FramerMotion, Swiper, Prettier,
              FontAwesome
            </li>
            <li>
              <div className="flex gap-2 text-3xl text-slate-50 p-2">
                <Link
                  href="https://github.com/hyemdev/winey"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  href="https://www.notion.so/hyemdev/2-3-Winey-a37f57c648894d38832dad4f809983c8"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <RxNotionLogo />
                </Link>
                <Link
                  href="https://www.figma.com/file/ttkCdDz7qJxCNRDU346Bbn/%EC%99%80%EC%9D%B8-%ED%94%BD%EC%97%85-%EC%84%9C%EB%B9%84%EC%8A%A4?type=design&node-id=0:1&mode=design&t=F6ukTUlNAjr8jUEe-1"
                  target="_blank"
                  className="hover:text-orange-200"
                >
                  <FaFigma />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
