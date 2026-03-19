import apiFetch from '../../lib/api';
import Head from 'next/head';
import Link from 'next/link';

const stripHtml = (html = '') => String(html || '').replace(/<[^>]*>/g, '').trim();
const safeUrl = (url = '') => {
  const u = String(url || '').trim();
  if (!u) return '';
  if (u.startsWith('http')) return u;
  return u.startsWith('/') ? u : `/${u}`;
};

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  try {
    const data = await apiFetch(
      `/api/s/dynamic-page/blog?contentBlock=Object&slug=${encodeURIComponent(params.slug)}`,
      { headers: { apihost: 'https://schooltheme1.institute.org.in' } }
    );

    const post = Array.isArray(data?.data) ? data.data[0] : (data?.data || data);
    if (!post) return { notFound: true };

    return {
      props: {
        post: {
          id:       post.id || post._id || '',
          title:    post.title || post.heading || 'Untitled',
          content:  post.content || post.desci || '',
          thumb:    post.thumb || post.featureImg || post.media || '',
          date:     post.createdAt
            ? new Date(post.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
            : '',
          category: post.category || post.tag || '',
          author:   post.author || '',
        },
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error('Blog slug error:', err);
    return { notFound: true };
  }
}

export default function BlogPost({ post = {} }) {
  if (!post?.title) return null;

  return (
    <>
      <Head>
        <title>{post.title} — Queenster University</title>
      </Head>
      <div style={{ background: '#071428', minHeight: '100vh', color: '#fff' }}>

        {/* ── HERO ── */}
        <div className="relative overflow-hidden" style={{ minHeight: '380px', background: '#0a1e38' }}>
          {post.thumb && (
            <>
              <img
                src={safeUrl(post.thumb)}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(7,20,40,0.4), #071428)' }} />
            </>
          )}
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">
            {post.category && (
              <span className="inline-block mb-4 text-xs font-bold px-4 py-1.5 rounded-full text-white" style={{ background: 'rgba(249,115,22,0.9)' }}>
                {post.category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white">{post.title}</h1>
            <div className="mt-5 flex items-center justify-center gap-4 text-white/40 text-sm">
              {post.date && <span>{post.date}</span>}
              {post.author && <><span>·</span><span>By {post.author}</span></>}
            </div>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div
            className="prose prose-invert prose-lg max-w-none"
            style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link href="/blog"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
