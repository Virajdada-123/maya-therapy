export default function Consultation() {
  return (
    <section className="bg-[#18221e]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b8c6bc]">
            Begin Your Therapy Journey
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight text-[#fffdf9] md:text-6xl">
            You don&apos;t have to figure everything out alone.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#c9d0ca]">
            Starting therapy can feel like a big step. A consultation gives
            you an opportunity to learn more about the process and consider
            whether working together feels right for you.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex rounded-full bg-[#fffdf9] px-7 py-4 text-sm font-medium text-[#18221e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f1eb]"
          >
            Schedule a Consultation
          </a>

        </div>
      </div>
    </section>
  );
}