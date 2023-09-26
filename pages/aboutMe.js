import Layout from "@/components/layout";

export default function AboutMe() {
  return (
    <Layout>
      <div className="wrap-color">
        <h3> About me ? </h3>
        <p> 이력서 PDF 보러가기 </p>
        <ul>
          <h4>/ Graduate</h4>
          <li>
            영남대학교 언론정보학과 졸업<span>2007.03 - 2012.08</span>
          </li>
          <li>
            대구 신명고등학교 졸업 <span> 2004.03 - 2007.02</span>
          </li>
        </ul>
        <ul>
          <h4>/ Certificate</h4>
          <li>
            정보처리기사<span>2015.10</span>
          </li>
          <li>
            컴퓨터 활용능력 2급 <span>2013.03</span>
          </li>
          <li>
            전산세무 2급 <span>2015.12</span>
          </li>
          <li>
            전산회계 1급 <span>2015.10</span>
          </li>
          <li>
            ERP 인사/회계 정보관리사 <span>2014.06</span>
          </li>
        </ul>
        <ul>
          <h4>/ Skills</h4>
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Redux</li>
          <li>Recoil</li>
          <li>Next.js</li>
          <li>Ant Design, Bootstrap, Tailwind</li>
          <li>styled-component, emotion, scss, css</li>
          <li>HTML5</li>
          <li>REST API</li>
          <li>Firebase</li>
        </ul>
        <ul>
          <h4>/ Tools</h4>
          <li>VScode</li>
          <li>Git / Github</li>
          <li>Figma</li>
        </ul>
        <ul>
          <h4>/ Carrier</h4>
          <li>
            (주)마인 <span>2017.9 - 2019.3</span>
          </li>
          <li>디자인 전문 회사</li>
          <li>경영지원부 주임</li>
          <li>회계 및 총무, 정부 지원 사업 계약 및 정산 업무</li>
          <li>
            명광산업(주) <span>2015.12 - 2017.8</span>
          </li>
          <li>자동차 관련부품 제조회사</li>
          <li>총괄관리부 사원</li>
          <li>자금 계획 수립 및 자금 관리, 회계 업무</li>
        </ul>
      </div>
    </Layout>
  );
}
