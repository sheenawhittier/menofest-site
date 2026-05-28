"use client";

import { useEffect, useState } from "react";

const ticketLink = "https://www.tickettailor.com/events/YOUR-EVENT-LINK";

const colors = {
  cream: "#f5ede5",
  burgundy: "#3b1718",
  pink: "#ff4f87",
  wine: "#7f1c2b",
  softPink: "#ff7ca8",
};

export default function Home() {
  const eventDate = new Date("2026-08-22T09:00:00").getTime();
  const [daysLeft, setDaysLeft] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      setDaysLeft(Math.max(Math.ceil(distance / (1000 * 60 * 60 * 24)), 0));
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <main className="bg-[#f5ede5] text-[#3b1718]">
      {/* Ticker */}
      <div className="bg-[#ff4f87] text-white py-3 px-4 text-center text-sm md:text-base font-bold tracking-wide">
        CLAWS UP • TIME TO ROAR • IT’S NOT IN YOUR HEAD • IT’S IN YOUR
        HORMONES • A MIDLIFE UPRISING
      </div>

      {/* Nav */}
<nav className="sticky top-0 z-50 bg-[#f5ede5]/90 backdrop-blur-md border-b border-[#d8c7bb]">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
    <a
      href="#tickets"
      className="font-black text-xl tracking-tight hover:text-[#ff4f87] transition"
      onClick={() => setMenuOpen(false)}
    >
      MENO FEST
    </a>

    <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.22em]">
      <a href="#about" className="hover:text-[#ff4f87] transition">About</a>
      <a href="#experience" className="hover:text-[#ff4f87] transition">Experience</a>
      <a href="#speakers" className="hover:text-[#ff4f87] transition">Speakers</a>
      <a href="#schedule" className="hover:text-[#ff4f87] transition">Schedule</a>
      <a href="#faq" className="hover:text-[#ff4f87] transition">FAQ</a>
      <a href="#sponsors" className="hover:text-[#ff4f87] transition">Sponsors</a>
    </div>

    <div className="hidden md:block">
      <a
        href={ticketLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ff4f87] hover:bg-[#e63e75] hover:scale-105 transition duration-300 text-white px-6 py-3 rounded-full text-sm font-bold"
      >
        GET TICKETS
      </a>
    </div>

    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden border border-[#3b1718] rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.18em]"
      aria-label="Toggle navigation menu"
    >
      {menuOpen ? "Close" : "Menu"}
    </button>
  </div>

  {menuOpen && (
    <div className="md:hidden bg-[#f5ede5] border-t border-[#d8c7bb] px-6 py-6">
      <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.22em]">
        {[
          ["About", "#about"],
          ["Experience", "#experience"],
          ["Speakers", "#speakers"],
          ["Schedule", "#schedule"],
          ["FAQ", "#faq"],
          ["Sponsors", "#sponsors"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#ff4f87] transition"
          >
            {label}
          </a>
        ))}

        <a
          href={ticketLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff4f87] text-white text-center px-6 py-4 rounded-full mt-2"
        >
          GET TICKETS
        </a>
      </div>
    </div>
  )}
</nav>

      {/* Hero */}
      <section
        id="tickets"
        className="noise-bg relative overflow-hidden min-h-[82vh] flex items-center justify-center text-center px-6 py-16 md:py-24 bg-[radial-gradient(circle_at_center,#fffaf6_0%,#f5ede5_55%,#ead7cb_100%)]"
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.45em] text-sm md:text-base mb-8 text-[#ff4f87]">
            August 22, 2026 • Provo, Utah
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-6">
            MENO FEST
          </h1>

          <h2 className="text-3xl md:text-5xl mb-12">
            The Menopause Festival
          </h2>

          <p className="text-2xl sm:text-4xl md:text-6xl leading-[1.05] max-w-5xl mx-auto mb-8">
            It’s not in your head,
            <br />
            it’s in your hormones.
          </p>

          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 text-[#5b3a3a]">
            This is your invitation to the rest of your life.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4f87] hover:bg-[#e63e75] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg font-bold"
            >
              GET TICKETS
            </a>

            <a
              href="#about"
              className="border-2 border-[#3b1718] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#3b1718] hover:text-white hover:scale-105 transition duration-300"
            >
              WHAT IS MENO FEST?
            </a>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="px-6 py-16 bg-[#3b1718] text-white text-center border-t border-[#d8c7bb]">
        <p className="uppercase tracking-[0.35em] text-[#ff7ca8] mb-4">
          Countdown to the uprising
        </p>
        <h2 className="text-6xl md:text-8xl font-black mb-4">{daysLeft}</h2>
        <p className="text-2xl">days until Meno Fest</p>
      </section>

      {/* Statement */}
      <section className="relative overflow-hidden bg-[#7f1c2b] text-white px-6 py-28">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#ff4f87_0%,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-[#ffb0c9] text-sm font-bold mb-8">
            Midlife is an uprising
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-black mb-10">
            We need you in your power.
            <br />
            Feeling awesome.
          </h2>

          <p className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-[#fce6ee]">
            Let’s end unnecessary suffering, and let’s make the rest of your
            life better.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-28 bg-white border-t border-[#d8c7bb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold mb-4">
              What is Meno Fest?
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
              A one-day conference, workshop, festival-like affair.
            </h2>
          </div>

          <div className="text-xl leading-relaxed text-[#5b3a3a] space-y-6">
            <p>
              Meno Fest has one goal: to improve the quality of women’s lives,
              specifically the second half, by giving them the best tools and
              information possible.
            </p>
            <p>
              We believe women. We hope to empower you to find support and
              resources for your well-being. Every aspect of it.
            </p>
            <p className="font-bold text-[#3b1718]">
              You matter. We need your voice. We need you feeling strong,
              vivacious, and full of peaceful power.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 py-28 bg-[#f5ede5] border-t border-[#d8c7bb]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold mb-4">
            Why this matters
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-10">
            Your doctor may not have the information you need.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-[2rem] p-8 border border-[#d8c7bb] shadow-sm">
              <p className="text-5xl font-black text-[#ff4f87] mb-4">100%</p>
              <p className="text-lg leading-relaxed">
                of women over 50 will experience menopause. All of them.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-[#d8c7bb] shadow-sm">
              <p className="text-5xl font-black text-[#ff4f87] mb-4">1–3</p>
              <p className="text-lg leading-relaxed">
                hours of menopause education is what many general practitioners
                receive total.
              </p>
            </div>

            <div className="bg-[#3b1718] text-white rounded-[2rem] p-8 shadow-sm">
              <p className="text-5xl font-black text-[#ff7ca8] mb-4">ROAR</p>
              <p className="text-lg leading-relaxed text-[#fce6ee]">
                It’s up to us to get the information to women. And women will
                save the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For You */}
      <section className="px-6 py-24 bg-white border-t border-[#d8c7bb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#ff4f87] font-bold mb-4">
              This conference is for you if
            </p>

            <h3 className="text-4xl md:text-5xl leading-tight font-bold mb-8">
              You have a female body, hormones, questions, symptoms, or a sense
              that something is off.
            </h3>

            <ul className="space-y-4 text-lg">
              <li>🔥 You’d like to understand what’s changing in your body and why.</li>
              <li>🔥 You want recent, relevant women’s health research — no agenda, just facts.</li>
              <li>🔥 You want to communicate clearly and confidently about your health.</li>
              <li>🔥 You’ve experienced anxiety, brain fog, night sweats, hot flashes, rage, fatigue, joint pain, or sleep changes.</li>
              <li>🔥 You feel like you might need to burst into tears, break into laughter, or high kick and cackle with liberation.</li>
            </ul>
          </div>

          <div className="bg-[#f5ede5] rounded-[2rem] p-10 border border-[#d8c7bb] shadow-sm">
            <h3 className="text-4xl md:text-5xl leading-tight font-bold mb-8">
              This conference is not for you if...
            </h3>

            <ul className="space-y-4 text-lg">
              <li>❌ You think menopause or perimenopause is a fad.</li>
              <li>❌ You want someone to sell you a magic “get your body back” pill.</li>
              <li>❌ You think you can outsmart menopause because you’re young and hot.</li>
              <li>❌ You think women just need to try harder, eat cleaner, and exercise more.</li>
              <li>❌ You think all providers are out to get you. Most just don’t have the right info.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-28 bg-[#f5ede5] border-t border-[#d8c7bb]">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold text-center mb-4">
            The Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] text-center mb-16">
            Not your mother’s menopause conference.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["🧊", "Hot Flash Lounge", "A cool, stylish place to sit, sip, laugh, reset, and remember you are not doing this alone."],
              ["💥", "Rage Wall", "Write it down. Smash the plate. Let it go. Big feelings are welcome here."],
              ["🌿", "Hormone Village", "Meet women-led businesses, practitioners, artists, creatives, physical therapists, nutritionists, massage therapists, and resources that actually help."],
            ].map(([icon, title, copy], index) => (
              <div
                key={title}
                className={`rounded-[2rem] p-8 shadow-sm border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 1
                    ? "bg-[#ff4f87] text-white border-[#ff4f87] hover:scale-[1.02]"
                    : "bg-white border-[#d8c7bb]"
                }`}
              >
                <p className="text-5xl mb-6">{icon}</p>
                <h3 className="text-3xl font-bold mb-4">{title}</h3>
                <p className={`text-lg leading-relaxed ${index === 1 ? "text-white" : ""}`}>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="px-6 py-28 bg-white border-t border-[#d8c7bb]">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold text-center mb-4">
            Hosted by
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-black text-center mb-8 max-w-6xl mx-auto">
            Aimee Hopkin and Alison Faulkner.
          </h2>

          <p className="max-w-4xl mx-auto text-center text-lg md:text-xl leading-relaxed mb-20 text-[#5b3a3a]">
            Aimee is a Psychiatric Nurse Practitioner and Women’s Mental Health
            and Menopause specialist. Alison brings 20 years of hands-on
            experience in women’s empowerment and mental wellness.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f5ede5] rounded-[2rem] p-8 border border-[#d8c7bb] shadow-sm">
              <div className="h-56 rounded-[1.5rem] bg-[#ead7cb] mb-6 flex items-center justify-center text-5xl">
                🧠
              </div>
              <p className="uppercase tracking-[0.2em] text-[#ff4f87] font-bold text-sm mb-3">
                Co-host
              </p>
              <h3 className="text-3xl font-bold mb-3">Aimee Hopkin</h3>
              <p className="text-lg leading-relaxed">
                Psychiatric Nurse Practitioner and Women’s Mental Health and
                Menopause specialist.
              </p>
            </div>

            <div className="bg-[#f5ede5] rounded-[2rem] p-8 border border-[#d8c7bb] shadow-sm">
              <div className="h-56 rounded-[1.5rem] bg-[#ead7cb] mb-6 flex items-center justify-center text-5xl">
                🎤
              </div>
              <p className="uppercase tracking-[0.2em] text-[#ff4f87] font-bold text-sm mb-3">
                Co-host
              </p>
              <h3 className="text-3xl font-bold mb-3">Alison Faulkner</h3>
              <p className="text-lg leading-relaxed">
                Women’s empowerment leader with 20 years of experience in mental
                wellness and community-building.
              </p>
            </div>

            <div className="bg-[#3b1718] text-white rounded-[2rem] p-8 shadow-sm">
              <div className="h-56 rounded-[1.5rem] bg-[#ff4f87] mb-6 flex items-center justify-center text-5xl">
                🔥
              </div>
              <p className="uppercase tracking-[0.2em] text-[#ff7ca8] font-bold text-sm mb-3">
                More speakers
              </p>
              <h3 className="text-3xl font-bold mb-3">Coming Soon</h3>
              <p className="text-lg leading-relaxed text-[#fce6ee]">
                Experts in HRT, brain health, sleep, metabolism, grief,
                intimacy, reinvention, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="px-6 py-28 bg-white border-t border-[#d8c7bb]">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold mb-4">
            Event Schedule
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-12">
            A full day of clarity, connection, and claws up energy.
          </h2>

          <div className="space-y-5 text-lg">
            {[
              ["8:30 AM", "Registration + Coffee + Marketplace"],
              ["9:30 AM", "Midlife Is a Power Shift"],
              ["10:30 AM", "Hormones, But Make It Make Sense"],
              ["12:15 PM", "Lunch + Hormone Village"],
              ["1:45 PM", "Breakout Sessions"],
              ["4:15 PM", "Closing Panel"],
            ].map(([time, item]) => (
              <div key={time} className="flex justify-between gap-6 border-b border-[#d8c7bb] pb-4">
                <span>{time}</span>
                <strong className="text-right">{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-28 bg-[#f5ede5] border-t border-[#d8c7bb]">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold mb-4">
            FAQ
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-12">
            Things you’re probably wondering.
          </h2>

          <div className="space-y-6">
            {[
              ["Am I in perimenopause — what is that?", "Perimenopause means you’ve started to show signs and symptoms of menopause. It can last over a 10+ year timeline, which is exactly why education matters."],
              ["Is this conference all about hormones and drugs?", "No. Meno Fest looks at health from all angles: sexual well-being, nutrition, mental wellness, physical health, coping skills, identity, purpose, and spark."],
              ["Is this some MLM front or supplement scheme?", "No. There is no magic elixir. The agenda is women’s health education, community, and informed choice."],
              ["Are you just going to tell me to lose weight and exercise more?", "Absolutely not. This is a supportive place to learn, feel, process, and understand your lived experience without shame."],
              ["Aren’t I too young for this?", "If you’re around 35, you may already be having symptoms you don’t realize could be hormone related. Knowledge is power."],
              ["Aren’t I too old for this?", "No. At Meno Fest, the older you are, the more respect you command. Your voice and experience matter."],
            ].map(([question, answer]) => (
              <div key={question} className="bg-white rounded-[1.5rem] p-8 border border-[#d8c7bb]">
                <h3 className="text-2xl font-bold mb-3">{question}</h3>
                <p className="text-lg leading-relaxed text-[#5b3a3a]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="px-6 py-28 bg-white border-t border-[#d8c7bb]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#ff4f87] font-bold mb-4">
            Partner With Us
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
            Sponsor the midlife uprising.
          </h2>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed mb-10 text-[#5b3a3a]">
            We feature aligned sponsors and vendors that support women’s
            well-being, education, research, community, and informed choice.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a className="bg-[#ff4f87] hover:bg-[#e63e75] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg font-bold cursor-pointer">
              BECOME A SPONSOR
            </a>

            <a className="border-2 border-[#3b1718] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#3b1718] hover:text-white hover:scale-105 transition duration-300 cursor-pointer">
              DOWNLOAD SPONSOR PACKET
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b1718] text-white px-6 py-12 text-center">
        <h2 className="text-3xl font-black mb-4">MENO FEST</h2>
        <p className="text-[#fce6ee] mb-6">
          It’s not in your head, it’s in your hormones.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.15em]">
          <a href="#about" className="hover:text-[#ff7ca8] transition">About</a>
          <a href="#experience" className="hover:text-[#ff7ca8] transition">Experience</a>
          <a href="#speakers" className="hover:text-[#ff7ca8] transition">Speakers</a>
          <a href="#schedule" className="hover:text-[#ff7ca8] transition">Schedule</a>
          <a href="#faq" className="hover:text-[#ff7ca8] transition">FAQ</a>
          <a href="#sponsors" className="hover:text-[#ff7ca8] transition">Sponsors</a>
        </div>
      </footer>
    </main>
  );
}