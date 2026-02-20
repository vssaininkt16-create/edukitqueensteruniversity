import apiFetch from '../../lib/api';

export async function getStaticPaths() {
  try {
    const data = await apiFetch('/api/s/dynamic-page/blog?contentBlock=Object', {
      headers: {
        apihost: 'https://schooltheme1.institute.org.in',
      },
    });

    console.log('API response for all blogs:', data); // Log raw response

    // Adjust based on your API response structure
    const paths = (data || []).map((item) => ({
      params: { slug: item.slug || item.id }, // Use slug or fallback to id
    })).filter((p) => p.params.slug);

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data } = await fetchDynamicPage(params.slug);

    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        pageData: data,
      },
      revalidate: 60, // ISR - refresh every 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
}

export default function BlogPage({ pageData }) {
  return (
    <div>
      <h1>{pageData?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData?.content }} />
    </div>
  );
}
