import { isSupabaseConfigured, createSupabaseClient } from '@/lib/supabase';

export const LOCAL_BLOG_POSTS = [
  {
    id: 'cinematic-portfolio-systems',
    slug: 'cinematic-portfolio-systems',
    title: 'Designing cinematic portfolio systems that still feel human',
    excerpt: 'A practical look at building digital experiences that balance motion, narrative, and clarity without sacrificing performance or usability.',
    category: 'Design System',
    readTime: '6 min read',
    publishedAt: '2026-09-22',
    heroImage: '/photo/about me.webp',
    coverAlt: 'Abstract cinematic portrait',
    author: 'Sarang',
    tags: ['Next.js', 'Branding', 'UX'],
    content: [
      'A cinematic portfolio is not just about dramatic motion or cinematic color. It is a way of making the work feel premium while keeping the experience readable, intentional, and useful.',
      'The real challenge is building a system where typography, pacing, and whitespace work together. When the motion is subtle and purposeful, the content begins to feel like a story instead of a set of sections.',
      'That is why strong portfolio design often starts with contrast: a bold headline against quiet supporting copy, a sculpted card against a dark background, and a short interaction that guides the eye without overwhelming it.',
      'Great experiences are still built from fundamentals: clarity, rhythm, and trust. The visual language may feel elevated, but it should never become obscure or distracting.'
    ]
  },
  {
    id: 'gsap-micro-interactions',
    slug: 'gsap-micro-interactions',
    title: 'Why micro-interactions matter more than flashy effects',
    excerpt: 'The best motion is quiet. It gives the interface confidence, rhythm, and direction while preserving performance and ease of use.',
    category: 'Animation',
    readTime: '5 min read',
    publishedAt: '2026-09-18',
    heroImage: '/photo/about me.webp',
    coverAlt: 'Dark editorial portrait',
    author: 'Sarang',
    tags: ['GSAP', 'Motion', 'UI'],
    content: [
      'Motion is most effective when it guides attention rather than competing for it. Fast, chaotic effects can make a product feel crowded. Small, precise transitions create emotional continuity in a way users can feel without even noticing.',
      'In portfolio work, micro-interactions are especially important because they make the interface feel tactile. Hover states, card reveals, and subtle scroll timing can transform an otherwise static layout into a premium storytelling experience.',
      'The goal is not more animation. It is clearer hierarchy, smoother transitions, and a stronger sense of craft. That is what users remember.'
    ]
  },
  {
    id: 'premium-web-dev-clarity',
    slug: 'premium-web-dev-clarity',
    title: 'Premium web design is clarity disguised as atmosphere',
    excerpt: 'Atmosphere matters, but users still need direction, focus, and clarity. The premium feeling comes from thoughtful restraint, not overload.',
    category: 'Product Design',
    readTime: '7 min read',
    publishedAt: '2026-09-12',
    heroImage: '/photo/about me.webp',
    coverAlt: 'Editorial portfolio layout',
    author: 'Sarang',
    tags: ['Strategy', 'Design', 'Web'],
    content: [
      'A premium interface does not feel premium because it is loud. It feels premium because every decision feels deliberate. The spacing, the typography, the hierarchy, and the contrast all support the same idea.',
      'This is what makes cinematic websites memorable. They are not just styled differently; they are constructed around a clear narrative. The user is taken through a sequence of experiences instead of being dropped into a collage of content.',
      'It is the difference between decoration and intention. Premium design is not decoration at all. It is a system of controlled emphasis.'
    ]
  }
];

function normalizePost(post) {
  if (!post) return null;
  return {
    id: post.id || post.slug || `${post.title || 'post'}-${Math.random()}`,
    slug: post.slug || String(post.id || post.title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: post.title || 'Untitled Post',
    excerpt: post.excerpt || post.summary || 'Read more about this story.',
    category: post.category || 'Journal',
    readTime: post.read_time || post.readTime || '5 min read',
    publishedAt: post.published_at || post.publishedAt || new Date().toISOString().slice(0, 10),
    heroImage: post.hero_image || post.heroImage || '/photo/about me.webp',
    coverAlt: post.cover_alt || post.coverAlt || post.title || 'Blog cover',
    author: post.author || 'Sarang',
    tags: Array.isArray(post.tags) ? post.tags : [],
    content: Array.isArray(post.content) ? post.content : [post.content || post.excerpt || '']
  };
}

export async function getBlogPosts() {
  if (process.env.NODE_ENV === 'development') {
    return LOCAL_BLOG_POSTS;
  }

  if (!isSupabaseConfigured()) {
    return LOCAL_BLOG_POSTS;
  }

  try {
    const supabase = createSupabaseClient();
    const tableNames = ['blog_posts', 'posts', 'articles'];

    for (const table of tableNames) {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('published_at', { ascending: false });

      if (!error && Array.isArray(data) && data.length) {
        return data.map(normalizePost);
      }
    }
  } catch {
    // fall back to local content when the CMS is unavailable
  }

  return LOCAL_BLOG_POSTS;
}

export async function getBlogPost(slug) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
