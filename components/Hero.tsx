import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f4f1eb]">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1fr_0.8fr] md:gap-16 md:py-20">

     {/* Hero Text */}
      <div>
       <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
        Therapy for Adults in Santa Monica
      </p>

        <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight text-[#18221e] sm:text-5xl md:text-[4.2rem]">
         Anxiety and Trauma Therapist in Santa Monica
        </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#52605a] md:text-lg md:leading-8">
            You deserve a space where you can slow down, feel understood, and
            work through what&apos;s been weighing on you. I offer warm,
            collaborative therapy for adults navigating anxiety, trauma,
            burnout, and perfectionism.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-[#18221e] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2d3b34]"
          >
            Schedule a Consultation
          </a>
        </div>

        {/* Maya's Photo */}
        <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[2rem]">
        <Image
            src="/images/maya.png"
            alt="Dr. Maya Reynolds, PsyD"
            width={800}
            height={1000}
            className="h-auto w-full object-contain"
            priority
        />
        </div>

      </div>
    </section>
  );
}