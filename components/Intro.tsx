import Image from "next/image";

export default function Intro() {
  return (
    <section id="about" className="bg-[#fffdf9]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/office-1.jpeg"
              alt="Dr. Maya Reynolds' Santa Monica therapy office"
              width={1000}
              height={750}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
              A Space to Slow Down
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-[#18221e] md:text-5xl">
              You don&apos;t have to keep holding everything together.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#52605a]">
              Many people look functional on the outside while quietly
              struggling with worry, exhaustion, overthinking, or feeling
              emotionally on edge.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#52605a]">
              Therapy can be a place to slow down, understand what you&apos;re
              experiencing, and develop more sustainable ways of living and
              working.
            </p>

            <div className="mt-8">
              <a
                href="#approach"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#18221e] transition hover:gap-3"
              >
                Learn about my approach
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}