export default function Footer() {
  return (
    <footer className="bg-[#18221e] text-[#fffdf9]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-2xl font-medium tracking-tight"
            >
              Dr. Maya Reynolds, PsyD
            </a>

            <p className="mt-5 max-w-md leading-7 text-[#b8c6bc]">
              Warm, collaborative therapy for adults in Santa Monica and
              throughout California via secure telehealth.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            <div>
              <p className="text-sm font-medium">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-sm text-[#b8c6bc]">
                <a
                  href="#about"
                  className="block transition-colors hover:text-white"
                >
                  About
                </a>

                <a
                  href="#specialties"
                  className="block transition-colors hover:text-white"
                >
                  Specialties
                </a>

                <a
                  href="#approach"
                  className="block transition-colors hover:text-white"
                >
                  Approach
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium">
                Visit
              </p>

              <div className="mt-5 space-y-3 text-sm text-[#b8c6bc]">
                <a
                  href="#office"
                  className="block transition-colors hover:text-white"
                >
                  Our Office
                </a>

                <a
                  href="#contact"
                  className="block transition-colors hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium">
                Location
              </p>

              <p className="mt-5 text-sm leading-6 text-[#b8c6bc]">
                Santa Monica, CA
                <br />
                California Telehealth
              </p>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#405047] pt-6 text-sm text-[#8f9d94] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights
            reserved.
          </p>

          <p>
            Licensed Clinical Psychologist
          </p>
        </div>

      </div>
    </footer>
  );
}