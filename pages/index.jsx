import DefaultTemplate from './templates/DefaultTemplate';
import apiFetch from '../lib/api';

export async function getStaticProps() {
  try {
    const apiResponse = await apiFetch('/api/s/dynamic-page/new-home-page?contentBlock=Object', {
      headers: { apihost: 'https://schooltheme1.institute.org.in' },
    });

    return {
      props: {
        contentBlock: apiResponse?.data?.contentBlock || {},
        pageData:     apiResponse?.data?.pageData     || {},
        websiteData:  apiResponse?.websiteData        || {},
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('API fetch failed:', error);
    return {
      props: { contentBlock: {}, pageData: {}, websiteData: {} },
      revalidate: 60,
    };
  }
}

export default function HomePage({ pageData, contentBlock, websiteData }) {
  return (
    <DefaultTemplate
      pageData={pageData}
      contentBlock={contentBlock}
      websiteData={websiteData}
    />
  );
}
