import DefaultTemplate from './templates/DefaultTemplate';
import apiFetch from '../lib/api';

export async function getStaticProps() {
  try {
    const apiResponse = await apiFetch('/api/s/dynamic-page/new-home-page?contentBlock=Object', {
      headers: {
        apihost: 'https://schooltheme1.institute.org.in',
      },
    });
    const contentBlock = apiResponse.data.contentBlock;
    console.log('HERO:', contentBlock?.HERO_CONTENT?.heading);
    return {
      props: {
        contentBlock: contentBlock,
        pageData: apiResponse.data.pageData
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('API fetch failed:', error);
    return {
      props: { contentBlock: {}, pageData: {} },
      revalidate: 60,
    };
  }
}

export default function HomePage({ pageData, contentBlock }) {
  return <DefaultTemplate pageData={pageData} contentBlock={contentBlock} />;
}
