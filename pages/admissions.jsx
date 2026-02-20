import DefaultTemplate from "./templates/DefaultTemplate";
import apiFetch from "../lib/api";

export default function Admissions({ pageData, contentBlock }) {
  return (
    <DefaultTemplate
      pageData={pageData}
      contentBlock={contentBlock}
    />
  );
}

export async function getStaticProps() {
  try {
    const apiResponse = await apiFetch('/api/s/dynamic-page/admissions-page?contentBlock=Object', {
      headers: { apihost: 'https://schooltheme1.institute.org.in' }
    });
    return {
      props: {
        pageData: apiResponse.data.pageData || {},
        contentBlock: apiResponse.data.contentBlock || {},
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: { pageData: {}, contentBlock: {} },
      revalidate: 60,
    };
  }
}
