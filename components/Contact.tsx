export default function Contact() {
  return (
    <section id="contact" className="bg-[#fffdf9]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">

          {/* Heading */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#52665b]">
              Contact
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.1] tracking-tight text-[#18221e] md:text-5xl">
              A supportive place to begin.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#52605a]">
              I offer in-person therapy from my Santa Monica office and secure
              telehealth sessions for clients located throughout California.
            </p>
          </div>

          {/* Contact information */}
          <div className="border-t border-[#d8d3c9]">

            <div className="grid gap-8 border-b border-[#d8d3c9] py-8 sm:grid-cols-2">
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
                  In-person therapy
                  <br />
                  California telehealth
                </p>
              </div>
            </div>

            <div className="py-8">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#52665b]">
                Next Step
              </p>

              <p className="mt-3 max-w-lg text-lg leading-7 text-[#52605a]">
                If you&apos;re considering therapy, a consultation can be a
                low-pressure opportunity to learn more and see whether we
                might be a good fit.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex rounded-full bg-[#18221e] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2d3b34]"
              >
                Schedule a Consultation
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}