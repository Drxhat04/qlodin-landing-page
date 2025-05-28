import React from "react";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-gradient-to-b from-slate-700 via-[#0b011d] to-white">
      <ParticleBackground />

      {/* FULL CENTERED HERO + FEATURES */}
      <section className="flex flex-1 items-center justify-center w-full px-4 text-center min-h-screen">
        <div className="max-w-lg">
          <img
            src="/logo.svg"
            alt="Qlodin Logo"
            className="mx-auto mb-12 h-20 sm:h-24 rounded-full bg-white/10 backdrop-blur-3xl p-3 shadow-[0_0_0_3px_#8B5CF6]/50"
          />

          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Style <span className="text-brand-accent font-bold">that Knows You</span>.
          </h1>

          <p className="mb-12 text-lg sm:text-xl leading-relaxed max-w-md mx-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#FFB300]">
            Your AI stylist, fashion feed &amp; smart wardrobe — all in one ecosystem.
          </p>

          {/* KEY FEATURES INLINE */}
          <div className="mt-6">
            <h2 className="mb-6 text-3xl sm:text-4xl font-semibold text-white">Key Features</h2>
            <p className="text-gray-text text-base sm:text-lg font-medium">Coming Soon</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <footer className="mt-20 flex flex-col items-center gap-6 pb-10 text-sm text-gray-text">
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/company/qlodin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/black-linkedin.svg"
              alt="LinkedIn"
              className="h-6 filter grayscale brightness-0 invert"
            />
          </a>
          <a
            href="https://www.instagram.com/qlodinofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/black-instagram.svg"
              alt="Instagram"
              className="h-6 filter grayscale brightness-0 invert"
            />
          </a>
        </div>
        <p>© 2025&nbsp;Qlodin&nbsp;·&nbsp;All rights reserved.</p>
      </footer>
    </main>
  );
}
