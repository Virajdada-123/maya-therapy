const expertise = [
  {
    title: "Anxiety",
    description:
      "Working with worry, overthinking, tension, panic, and the feeling of always being on edge.",
  },
  {
    title: "Trauma",
    description:
      "A careful, safety-focused approach to processing past experiences and building greater stability.",
  },
  {
    title: "Burnout",
    description:
      "Support for adults who feel exhausted, disconnected, or overwhelmed by ongoing personal or professional pressure.",
  },
  {
    title: "Perfectionism",
    description:
      "Exploring high internal pressure and developing more sustainable ways of living and working.",
  },
  {
    title: "Emotional Regulation",
    description:
      "Learning to recognize and respond to emotional and physiological experiences with greater awareness.",
  },
  {
    title: "Chronic Stress",
    description:
      "Understanding the effects of prolonged stress and finding ways to feel more grounded in everyday life.",
  },
];

export default function Expertise() {
  return (
    <section className="bg-[#fffdf9]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
            Areas of Expertise
          </p>

          <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-[#18221e] md:text-5xl">
            Understanding what you&apos;re experiencing is part of finding a
            way forward.
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="mt-16 grid border-t border-[#d8d3c9] md:grid-cols-2">
          {expertise.map((item, index) => (
            <article
              key={item.title}
              className={`group border-b border-[#d8d3c9] py-8 md:px-6 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-medium tracking-tight text-[#18221e]">
                  {item.title}
                </h3>

                <span className="text-lg text-[#52665b] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <p className="mt-4 max-w-md leading-7 text-[#52605a]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}