import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import { getBlogPost } from "@/app/blog/content";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <article className="relative min-h-screen px-5 pb-20 pt-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#ff6b1a]">
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">{post.category}</span>
          </div>

          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="mb-6 inline-flex rounded-full border border-[#ff6b1a]/30 bg-[#ff6b1a]/10 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-[#ff6b1a]">
              {post.category}
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-white/45">
              <span>{post.author}</span>
              <span className="hidden text-white/20 md:inline">•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span className="hidden text-white/20 md:inline">•</span>
              <span>{post.readTime}</span>
            </div>
          </motion.header>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
            <img src={post.heroImage} alt={post.coverAlt} className="h-[340px] w-full object-cover md:h-[460px]" />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-white/45">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-6 text-base leading-8 text-white/70 md:text-lg">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
