import DefaultTemplate from "./templates/DefaultTemplate";
import apiFetch from "../lib/api";

export default function UniversityLife({ pageData, contentBlock }) {
  return (
    <DefaultTemplate
      pageData={pageData}
      contentBlock={contentBlock}
    />
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://r1.edkt.net/api/s/dynamic-page/university-life?contentBlock=Object",
      {
        headers: {
          apihost: "https://schooltheme1.institute.org.in",
          "Content-Type": "application/json",
        },
      }
    );
    const json = await res.json();
    const contentBlock = json.data.contentBlock;
    return {
      props: { pageData: {}, contentBlock },
      revalidate: 60,
    };
  } catch (error) {
    return { props: { pageData: {}, contentBlock: {} }, revalidate: 60 };
  }
}
