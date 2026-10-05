const clients = [
  {
    number: "01",
    title: "Anxiety & Overthinking",
    description:
      "For adults experiencing constant worry, overthinking, panic, tension, or feeling emotionally on edge.",
  },
  {
    number: "02",
    title: "Trauma & Past Experiences",
    description:
      "For adults working through the effects of past experiences, relationships, childhood experiences, or chronic stress.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "For professionals, entrepreneurs, and creatives who feel exhausted or overwhelmed by high internal pressure.",
  },
];

export default function WhoIHelp() {
  return (
    <section className="bg-[#f4f1eb]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* Section heading */}
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
              Who I Help
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-[#18221e] md:text-5xl">
            Support for adults navigating life&apos;s difficult seasons.
          </h2>
        </div>

        {/* Client list */}
        <div className="mt-16 border-t border-[#cfc9bd]">
          {clients.map((client) => (
            <article
              key={client.number}
              className="group grid gap-5 border-b border-[#cfc9bd] py-9 transition-colors hover:bg-[#eee9df] md:grid-cols-[80px_1fr_1.2fr] md:items-start md:gap-10 md:px-5"
            >
              <span className="text-sm font-medium tracking-wider text-[#7b817b]">
                {client.number}
              </span>

              <h3 className="text-2xl font-medium tracking-tight text-[#18221e] md:text-3xl">
                {client.title}
              </h3>

              <div className="flex items-start justify-between gap-8">
                <p className="max-w-xl leading-7 text-[#52605a]">
                  {client.description}
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