"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./BlurText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-label", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.4 });
      gsap.from(".hero-line",  { y: 90, opacity: 0, stagger: 0.1, duration: 1.1, ease: "power4.out", delay: 0.6 });
      
      // Premium staggered letter effect for the main name
      gsap.from(".hero-letter", { 
        y: 100, 
        opacity: 0, 
        rotateX: -40,
        stagger: 0.06, 
        duration: 1.2, 
        ease: "power4.out", 
        delay: 0.7 
      });

      gsap.from(".hero-sub",   { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 1.4 });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 60%",
          end:   "bottom 10%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -50,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[135vh] flex flex-col justify-center px-10 md:px-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl">
        <p className="hero-label text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.2em] uppercase font-bold mb-6">
          Data Analyst • CRM Specialist • Full Stack Developer
        </p>

        <h1
          className="font-black tracking-tighter leading-[0.75] mb-12 flex flex-col relative z-10 hero-clamp-text"
        >
          <span className="hero-line block ghost z-0">Hey, I'm</span>
          <span className="block text-white -mt-2 md:-mt-6 z-10 hero-perspective">
            {"Rajmani.".split("").map((char, index) => (
              <span key={index} className="hero-letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-sub text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.35em] uppercase font-medium mb-8">
          Building intelligent digital experiences.
        </p>

        <div className="max-w-lg hero-sub flex flex-col gap-6">
          <BlurText
            text="I build intelligent digital experiences powered by data, AI automation, and modern web technologies."
            delay={30}
            animateBy="words"
            direction="bottom"
            stepDuration={0.22}
            className="text-base md:text-[17px] text-white/60 font-medium leading-[1.6]"
          />

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-[#ff6b1a] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-black transition-colors duration-300 hover:bg-[#ff8c42]"
            >
              View Projects
            </a>
            <a
              href="/resume/Rajmani_Nadar_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:border-[#ff6b1a]/50 hover:text-[#ffb68a]"
            >
              Download Resume
            </a>
          </div>

          <p className="text-[10px] text-white/40 tracking-[0.4em] uppercase font-medium">
            Coimbatore, Tamil Nadu, India
          </p>

          <p className="mt-8 text-[10px] text-white/40 tracking-[0.4em] uppercase font-medium">
            Explore ↓
          </p>
        </div>
      </div>

    </section>
  );
}
