"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const eventDate = new Date("2026-08-22T09:00:00").getTime();
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setDaysLeft(
        Math.max(
          Math.ceil(distance / (1000 * 60 * 60 * 24)),
          0
        )
      );
    };

    updateCountdown();

    const timer = setInterval(
      updateCountdown,
      1000 * 60 * 60
    );

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <main className="bg-[#f8f1ea] text-[#3b1f1f]">

      {/* Ticker Bar */}
      <div className="bg-[#ff4f87] text-white py-3 text-center text-sm md:text-base font-bold tracking-wide">
        <div className="flex justify-center items-center">
          CLAWS UP • TIME TO ROAR • EDUCATION • VALIDATION • CELEBRATION •
          HOT FLASHES • COLD DRINKS • BIG FEELINGS • A MIDLIFE UPRISING •
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#f8f1ea]/80 border-b border-[#ead7cb]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="font-black text-xl tracking-tight">
            MENO FEST
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.15em]">

            <a
              href="#experience"
              className="hover:text-[#ff4f87] transition"
            >
              Experience
            </a>

            <a href="#speakers" className="hover:text-[#ff4f87] transition">
              Speakers
            </a>
            <a
              href="#schedule"
              className="hover:text-[#ff4f87] transition"
            >
              Schedule
            </a>

            <a
              href="#manifesto"
              className="hover:text-[#ff4f87] transition"
            >
              Manifesto
            </a>

            <a href="#sponsors" className="hover:text-[#ff4f87] transition">
  Sponsors
</a>

            <a
              href="#tickets"
              className="hover:text-[#ff4f87] transition"
            >
              Tickets
            </a>

          </div>

          <a
  href="https://www.tickettailor.com/events/YOUR-EVENT-LINK"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#ff4f87] hover:bg-[#e63e75] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg font-bold cursor-pointer"
>
  GET TICKETS
</a>

        </div>
      </nav>

      {/* Hero */}
      <section
        id="tickets"
        className="min-h-[78vh] flex flex-col items-center justify-center text-center px-6 py-16 bg-[radial-gradient(circle_at_center,#fffaf6_0%,#f8f1ea_55%,#f2e4d9_100%)]"
      >

        <p className="uppercase tracking-[0.45em] text-sm mb-8 text-[#ff4f87]">
          August 22, 2026 • Provo, Utah
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 tracking-tight">
          MENO FEST
        </h1>

        <h2 className="text-3xl md:text-5xl mb-8">
          The Menopause Festival
        </h2>

        <p className="max-w-2xl text-lg md:text-2xl leading-relaxed mb-10">
          A sanctuary of support for women in midlife.
          <br />
          Education. Validation. Celebration.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-2">

          <a className="bg-[#ff4f87] hover:bg-[#e63e75] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg font-bold cursor-pointer">
            GET TICKETS
          </a>

          <a
            href="#experience"
            className="border-2 border-[#3b1f1f] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#3b1f1f] hover:text-white hover:scale-105 transition duration-300"
          >
            VIEW THE EXPERIENCE
          </a>

        </div>
      </section>

{/* Statement Banner */}
<section className="relative overflow-hidden bg-[#2a1111] text-white px-6 py-32">

  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#ff4f87_0%,transparent_60%)]"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    <p className="uppercase tracking-[0.4em] text-[#ff8db0] text-sm font-bold mb-8">
      This is your permission slip
    </p>

    <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-black mb-10">
      Midlife isn’t the end.
      <br />
      It’s the beginning.
    </h2>

    <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-[#f6dede]">
      Meno Fest is where women come to laugh,
      learn, rage, heal, reconnect,
      and remember who they are.
    </p>

  </div>
</section>

{/* Statement Banner */}
<section className="relative overflow-hidden bg-[#2a1111] text-white px-6 py-32">
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#ff4f87_0%,transparent_60%)]"></div>

  <div className="relative max-w-6xl mx-auto text-center">
    <p className="uppercase tracking-[0.4em] text-[#ff8db0] text-sm font-bold mb-8">
      This is your permission slip
    </p>

    <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-black mb-10">
      Midlife isn’t the end.
      <br />
      It’s the beginning.
    </h2>

    <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-[#f6dede]">
      Meno Fest is where women come to laugh, learn, rage, heal, reconnect,
      and remember who they are.
    </p>
  </div>
</section>

      {/* Countdown */}
      <section className="px-6 py-16 bg-[#3b1f1f] text-white text-center">

        <p className="uppercase tracking-[0.35em] text-[#ff8db0] mb-4">
          Countdown to the uprising
        </p>

        <h2 className="text-6xl md:text-8xl font-black mb-4">
          {daysLeft}
        </h2>

        <p className="text-2xl">
          days until Meno Fest
        </p>

      </section>

      {/* Is This For You */}
      <section className="px-6 py-24 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>

            <p className="uppercase tracking-[0.25em] text-[#ff4f87] font-bold mb-4">
              Is this for you?
            </p>

            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              You should come to MENO FEST if...
            </h3>

            <ul className="space-y-4 text-lg">
              <li>🔥 You’ve ever Googled “why am I suddenly angry?”</li>
              <li>🔥 You wake up at 3am for absolutely no reason.</li>
              <li>🔥 Your doctor made you feel dramatic.</li>
              <li>🔥 You’re exhausted from taking care of everyone else.</li>
              <li>🔥 You’ve forgotten words mid-sentence.</li>
              <li>🔥 You’re ready to feel powerful again.</li>
            </ul>

          </div>

          <div className="bg-[#f8f1ea] rounded-[2rem] p-10 border border-[#ead7cb] shadow-sm">

            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Don’t come if...
            </h3>

            <ul className="space-y-4 text-lg">
              <li>❌ You want beige pamphlets.</li>
              <li>❌ You hate laughing.</li>
              <li>❌ You think women over 40 disappear.</li>
              <li>❌ You’re afraid of bold conversations.</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-6 py-28 bg-[#f8f1ea]"
      >

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold text-center mb-4">
            The Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-center mb-16">
            Not your mother’s menopause conference.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#ead7cb] transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <p className="text-5xl mb-6">🧊</p>

              <h3 className="text-3xl font-bold mb-4">
                Hot Flash Lounge
              </h3>

              <p className="text-lg leading-relaxed">
                A cool, stylish place to sit, sip, laugh,
                reset, and remember you are not doing this alone.
              </p>

            </div>

            <div className="bg-[#ff4f87] text-white rounded-[2rem] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

              <p className="text-5xl mb-6">💥</p>

              <h3 className="text-3xl font-bold mb-4">
                Rage Wall
              </h3>

              <p className="text-lg leading-relaxed">
                Write it down. Smash the plate.
                Let it go. Big feelings are welcome here.
              </p>

            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#ead7cb] transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <p className="text-5xl mb-6">🌿</p>

              <h3 className="text-3xl font-bold mb-4">
                Hormone Village
              </h3>

              <p className="text-lg leading-relaxed">
                Medical education, wellness vendors,
                pelvic floor support, beauty,
                community, and resources that actually help.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section
        id="manifesto"
        className="bg-[#3b1f1f] text-white px-6 py-28 text-center"
      >

        <p className="uppercase tracking-[0.3em] text-[#ff8db0] mb-6">
          The Manifesto
        </p>

        <h3 className="text-5xl md:text-7xl font-black mb-10">
          This isn’t a conference.
          <br />
          It’s a revolution.
        </h3>

        <p className="max-w-4xl mx-auto text-xl leading-relaxed text-[#f6dede]">
          This is not a pity party.
          This is not a medical conference in bad lighting.
          This is a midlife uprising —
          bold, honest, smart, funny, scientific,
          rebellious, and deeply validating.
        </p>

      </section>

{/* Speakers */}
<section id="speakers" className="px-6 py-28 bg-[#f8f1ea]">
  <div className="max-w-7xl mx-auto">
    <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold text-center mb-4">
      Featured Voices
    </p>

    <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-black text-center mb-8 max-w-6xl mx-auto">
      Smart, real, funny, and medically credible.
    </h2>

    <p className="max-w-4xl mx-auto text-center text-lg md:text-xl leading-relaxed mb-20 text-[#5b3a3a]">
      Meno Fest brings together medical experts, therapists, wellness leaders,
      and women who are ready to tell the truth about midlife.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-[2rem] p-8 border border-[#ead7cb] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="h-56 rounded-[1.5rem] bg-[#ead7cb] mb-6 flex items-center justify-center text-5xl">
          🎤
        </div>
        <p className="uppercase tracking-[0.2em] text-[#ff4f87] font-bold text-sm mb-3">
          Mainstage
        </p>
        <h3 className="text-3xl font-bold mb-3">Alison</h3>
        <p className="text-lg leading-relaxed">
          Midlife Is a Power Shift — not a diagnosis.
        </p>
      </div>

      <div className="bg-white rounded-[2rem] p-8 border border-[#ead7cb] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="h-56 rounded-[1.5rem] bg-[#ead7cb] mb-6 flex items-center justify-center text-5xl">
          🧠
        </div>
        <p className="uppercase tracking-[0.2em] text-[#ff4f87] font-bold text-sm mb-3">
          Hormones
        </p>
        <h3 className="text-3xl font-bold mb-3">Aimee</h3>
        <p className="text-lg leading-relaxed">
          Hormones, but make it make sense.
        </p>
      </div>

      <div className="bg-[#3b1f1f] text-white rounded-[2rem] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="h-56 rounded-[1.5rem] bg-[#ff4f87] mb-6 flex items-center justify-center text-5xl">
          🔥
        </div>
        <p className="uppercase tracking-[0.2em] text-[#ff8db0] font-bold text-sm mb-3">
          More speakers
        </p>
        <h3 className="text-3xl font-bold mb-3">Coming Soon</h3>
        <p className="text-lg leading-relaxed text-[#f6dede]">
          Experts in HRT, brain health, sleep, metabolism, grief, intimacy,
          reinvention, and more.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Schedule */}
      <section
        id="schedule"
        className="px-6 py-28 bg-white"
      >

        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold mb-4">
            Event Schedule
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-12">
            A full day of clarity,
            connection, and claws up energy.
          </h2>

          <div className="space-y-5 text-lg">

            <div className="flex justify-between border-b pb-4">
              <span>8:30 AM</span>
              <strong>Registration + Coffee + Marketplace</strong>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span>9:30 AM</span>
              <strong>Midlife Is a Power Shift</strong>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span>10:30 AM</span>
              <strong>Hormones, But Make It Make Sense</strong>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span>12:15 PM</span>
              <strong>Lunch + Hormone Village</strong>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span>1:45 PM</span>
              <strong>Breakout Sessions</strong>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span>4:15 PM</span>
              <strong>Closing Panel</strong>
            </div>

          </div>
        </div>
      </section>

      {/* Sponsors */}
<section id="sponsors" className="px-6 py-28 bg-[#f8f1ea]">
  <div className="max-w-6xl mx-auto text-center">
    <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold mb-4">
      Partner With Us
    </p>

    <h2 className="text-5xl md:text-7xl font-black mb-8">
      Sponsor the midlife uprising.
    </h2>

    <p className="max-w-3xl mx-auto text-xl leading-relaxed mb-10 text-[#5b3a3a]">
      Put your brand in front of smart, powerful, high-spending women who are
      actively looking for health, wellness, beauty, lifestyle, and community
      solutions.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-5">
      <a className="bg-[#ff4f87] hover:bg-[#e63e75] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg font-bold cursor-pointer">
        BECOME A SPONSOR
      </a>

      <a className="border-2 border-[#3b1f1f] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#3b1f1f] hover:text-white hover:scale-105 transition duration-300 cursor-pointer">
        DOWNLOAD SPONSOR PACKET
      </a>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-[#3b1f1f] text-white px-6 py-12 text-center">
  <h2 className="text-3xl font-black mb-4">MENO FEST</h2>

  <p className="text-[#f6dede] mb-6">
    Education. Validation. Celebration.
  </p>

  <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.15em]">
    <a href="#experience" className="hover:text-[#ff8db0] transition">
      Experience
    </a>
    <a href="#speakers" className="hover:text-[#ff8db0] transition">
      Speakers
    </a>
    <a href="#schedule" className="hover:text-[#ff8db0] transition">
      Schedule
    </a>
    <a href="#sponsors" className="hover:text-[#ff8db0] transition">
      Sponsors
    </a>
  </div>
</footer>

    </main>
  );
}