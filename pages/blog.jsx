import apiFetch from '../lib/api';
import Link from 'next/link';
import Head from 'next/head';

const stripHtml = (html = '') => String(html || '').replace(/<[^>]*>/g, '').trim();
const safeUrl = (url = '') => {
  const u = String(url || '').trim();
  if (!u) return '';
  if (u.startsWith('http')) return u;
  return u.startsWith('/') ? u : `/${u}`;
};

export async function getStaticProps() {
  try {
    const data = await apiFetch('/api/s/dynamic-page/blog?contentBlock=Object', {
      headers: { apihost: 'https://schooltheme1.institute.org.in' },
    });

    // API returns list at data.data or data itself
    const rawList = Array.isArray(data?.data) ? data.data
      : Array.isArray(data) ? data
      : [];

    const posts = rawList.map((p) => ({
      id:       p.id       || p._id || '',
      title:    p.title    || p.heading || 'Untitled',
      slug:     p.slug     || p.url || p.id || '',
      excerpt:  stripHtml(p.shortDesc || p.desci || p.content || '').slice(0, 160),
      thumb:    p.thumb    || p.featureImg || p.media || '',
      date:     p.createdAt ? new Date(p.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
      category: p.category || p.tag || '',
    })).filter((p) => p.slug);

    return { props: { posts }, revalidate: 60 };
  } catch (e) {
    return { props: { posts: [] }, revalidate: 60 };
  }
}

export default function BlogListing({ posts = [] }) {
  return (
    <>
      <Head><title>Blog — Queenster University</title></Head>
      <div style={{ background: '#071428', minHeight: '100vh', color: '#fff' }}>

        {/* ── PAGE HEADER ── */}
        <div style={{ background: 'linear-gradient(135deg,#0e2a4a,#071428)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          className="py-16 px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange-400" />
            <span className="text-orange-400 text-xs font-bold tracking-[0.22em] uppercase">Latest Updates</span>
            <span className="h-px w-8 bg-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">University Blog</h1>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm">
            News, research highlights, campus life and announcements from Queenster University.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {posts.length === 0 ? (
            /* ── EMPTY STATE ── */
            <div className="text-center py-24">
              <div className="text-6xl mb-6">📰</div>
              <h2 className="text-2xl font-bold text-white/70 mb-2">No posts yet</h2>
              <p className="text-white/40 text-sm">Check back soon for the latest news and stories.</p>
            </div>
          ) : (
            /* ── POSTS GRID ── */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id || post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden" style={{ height: '200px', background: '#0e2a4a' }}>
                    {post.thumb ? (
                      <img
                        src={safeUrl(post.thumb)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">📄</div>
                    )}
                    {post.category && (
                      <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ background: 'rgba(249,115,22,0.9)' }}>
                        {post.category}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    {post.date && (
                      <span className="text-white/35 text-xs mb-3 font-mono">{post.date}</span>
                    )}
                    <h2 className="text-white font-bold text-base leading-snug group-hover:text-orange-400 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                    )}
                    <div className="mt-4 flex items-center gap-1.5 text-orange-400 text-xs font-semibold">
                      Read more
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
