import { FC, memo } from 'react';
import Image from 'next/image';

// ✅ CORRECT PATH (FIXED)
import profilePic from '../../images/portfolio/2023BMS006.jpeg';

const Hero: FC = memo(() => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100"
    >
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-200 opacity-35 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-300 opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900">Arzoo</h1>

            

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
              I am a B.Tech student in Mathematics and Scientific Computing at IIIT Gwalior,
              with a strong focus on data analysis, machine learning, and statistical modeling.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#portfolio"
                className="rounded-md bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-600"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-md border border-sky-500 px-6 py-3 font-medium text-sky-500 hover:bg-sky-50"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <Image
                src={profilePic}
                alt="Arzoo profile"
                width={320}
                height={320}
                className="h-80 w-80 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600" />
    </section>
  );
});

export default Hero;
