import Layout from "@/components/layout";
import { TOKEN, DATABASE_ID } from "../config";
export default function Projects() {
  // 빌드타임에 호출이 된다
  return (
    <Layout>
      <h3> 프로젝트 </h3>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const result = await res.json;

  console.log(result);
  return {
    props: {},
  };
}
