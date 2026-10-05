import Image from "next/image";

const methods = [
  {
    title: "Cognitive Behavioral Therapy",
    shortTitle: "CBT",
  },
  {
    title: "EMDR",
    shortTitle: "EMDR",
  },
  {
    title: "Mindfulness",
    shortTitle: "Mindfulness",
  },
  {
    title: "Body-Oriented Techniques",
    shortTitle: "Body-Based",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-[#f4f1eb]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/office-2.jpeg"
              alt="Calm interior of Dr. Maya Reynold's therapy office"
              width={1000}
              height={750}
              className="h-[520px] w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
              How I Work
            </p>

            <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-[#18221e] md:text-5xl">
              Therapy that meets you where you are.
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#52605a]">
              I take a warm, collaborative, and grounded approach to therapy.
              Sessions are structured enough to feel supportive while still
              leaving space for reflection and depth.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#52605a]">
              I integrate evidence-based methods to help you understand both
              the emotional and physiological sides of what you&apos;re
              experiencing.
            </p>

            {/* Methods */}
            <div className="mt-10 grid grid-cols-2 border-t border-[#cfc9bd]">
              {methods.map((method) => (
                <div
                  key={method.title}
                  className="border-b border-[#cfc9bd] py-5 pr-5"
                >
                  <p className="text-sm font-medium text-[#18221e]">
                    {method.shortTitle}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#52605a]">
                    {method.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}