"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import PageShell from "@/components/PageShell";
import { getBlogPosts } from "@/app/blog/content";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let active = true;

    getBlogPosts().then((data) => {
      if (active) setPosts(data);
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-kicker", { y: 22, opacity: 0, duration: 0.6, ease: "power3.out" });
      gsap.from(".blog-title", { y: 40, opacity: 0, duration: 0.8, ease: "power4.out", delay: 0.1 });
      gsap.from(".blog-card", { y: 30, opacity: 0, stagger: 0.08, duration: 0.75, ease: "power3.out", delay: 0.22 });
    });

    return () => ctx.revert();
  }, [posts.length]);

  return (
    <PageShell>
      <section className="relative min-h-screen px-5 pb-24 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="blog-kicker text-[10px] font-medium uppercase tracking-[0.5em] text-[#ff6b1a]">
            Journal
          </p>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h1 className="blog-title max-w-3xl text-4xl font-black tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
              Notes on design, development, and creative systems.
            </h1>

            <p className="max-w-md text-sm leading-7 text-white/55 md:text-right">
              Short essays, process notes, and behind-the-scenes thinking from building cinematic digital experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="blog-card group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative h-64 overflow-hidden border-b border-white/10">
                    <img
                      src={post.heroImage}
                      alt={post.coverAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/15 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-[#ff6b1a]/30 bg-[#ff6b1a]/10 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.3em] text-[#ff6b1a]">
                      {post.category}
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/45">
                      <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-black leading-tight tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#ffb68a]">
                      {post.title}
                    </h2>

                    <p className="text-sm leading-7 text-white/60">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
