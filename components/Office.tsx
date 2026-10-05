import Image from "next/image";

export default function Office() {
  return (
    <section id="office" className="bg-[#e8e3d9]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
            Our Office
          </p>

          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-[#18221e] md:text-5xl">
              A calm space to slow down and feel at ease.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52605a]">
              My Santa Monica office is a quiet, private space designed to feel
              calm and grounding, with natural light and a comfortable,
              uncluttered environment.
            </p>
          </div>
        </div>

        {/* Office Images */}
        <div className="mt-14 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">

          {/* Large image */}
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] md:min-h-[420px]">
            <Image
              src="/images/office-1.jpeg"
              alt="Dr. Maya Reynolds' Santa Monica therapy office"
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Smaller image */}
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] md:min-h-[420px]">
            <Image
              src="/images/office-2.jpeg"
              alt="Interior of Dr. Maya Reynolds' therapy office"
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>

        </div>

        {/* Location information */}
        <div className="mt-12 grid gap-8 border-t border-[#bdb7aa] pt-8 md:grid-cols-2">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#52665b]">
              Location
            </p>

            <p className="mt-3 text-lg leading-7 text-[#18221e]">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#52665b]">
              Sessions
            </p>

            <p className="mt-3 text-lg leading-7 text-[#18221e]">
              In-person therapy in Santa Monica
              <br />
              Secure telehealth throughout California
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}