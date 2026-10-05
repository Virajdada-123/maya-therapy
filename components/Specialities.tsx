const specialties = [
  {
    number: "01",
    title: "Anxiety",
    description:
      "Support for worry, overthinking, panic, tension, and the feeling of always being on edge.",
  },

  {
    number: "02",
    title:"Trauma",
    description:
    "A carefully paced approach focused on safety, stabilization, and feeling more regulated in daily life.",
  },

  {
    number: "03",
    title:"Burnout",
    description:
    "Support for adults who feel exhausted, disconnected, or overwhelmed by ongoing pressure.",
  },

  {
    number: "04",
    title:"Perfectionism",
    description:
    "Explore patterns of high internal pressure and develop more sustainable ways of living and working.",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-[#fffdf9]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
            Specialties
          </p>

          <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-[#18221e] md:text-5xl">
            Support for the experiences that can leave you feeling stuck.
          </h2>
        </div>

        {/* Specialty list */}
        <div className="mt-16 border-t border-[#d8d3c9]">
          {specialties.map((specialty) => (
            <article
              key={specialty.number}
              className="group grid gap-5 border-b border-[#d8d3c9] py-9 transition-colors hover:bg-[#f7f3eb] md:grid-cols-[80px_1fr_1.4fr] md:items-start md:gap-10 md:px-5"
            >
              <span className="text-sm font-medium tracking-wider text-[#7b817b]">
                {specialty.number}
              </span>

              <h3 className="text-2xl font-medium tracking-tight text-[#18221e] md:text-3xl">
                {specialty.title}
              </h3>

              <div className="flex items-start justify-between gap-8">
                <p className="max-w-xl leading-7 text-[#52605a]">
                  {specialty.description}
                </p>

                <span className="shrink-0 text-xl text-[#52665b] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}