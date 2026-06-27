"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ticketLink = "https://buytickets.at/menofestthemenopausefestival/2252787";

const faqs = [
  {
    question: "Am I in Perimenopause- what is that?",
    answer:
      "“Peri” which is latin for “about or around” means basically nothing…except that you have started to show signs and symptoms of menopause. Hence: Perimenopause means you’re ABOUT at menopause time.\n\nAnd “Menopause” is technically defined by the cessation of your period for 12 consecutive months.\n\nNotice how vague these are? AND “Perimenopause” can last over a 10+ year timeline. How nebulous is that?!\n\nSo, are you in it? Do you have the symptoms and signs? HOW ARE YOU SUPPOSED TO EVEN KNOW?! And no, you can’t just get your hormones tested to find out--come to the conference WE WILL EXPLAIN.\n\nUnfortunately there’s close to no education or even research available to general practitioners, unless they are actively seeking it. So you very likely can go to your GP expressing concerns with your health very-much related to Perimenopause, and they will never ever bring it up / easily miss the timeline of things.\n\nEducation is the ANSWER. The children should know the signs of menopause, menopause should not be taboo and embarrassing and = old and irrelevant.",
  },
  {
    question: "Is this conference all about hormones and drugs?",
    answer:
      "Meno Fest is intended to help you look at your health from ALL angles. This includes sexual well-being, nutrition, mental wellness, physical health and coping skills. YOU feeling awesome includes addressing: relationships, identity and helping you find and connect to your purpose and SPARK.\n\nWe will talk about Hormone Replacement Therapy options, as well as other holistic approaches and alternative medicines. But again, you are in charge, we just want you to have GOOD information. You get to decide what to do with it and what is right for your BODY-ODY-ODY!",
  },
  {
    question: "Is this some MLM front or supplement ponzi scheme?",
    answer:
      "We’d be rich! But no, we have no agenda other than the advancement of women’s health, education and empowering YOU to make informed choices about your beautiful banging’ body! We have no master plan to produce, or create or sell a magic elixir. We want community and resources for you!\n\nWe will have sponsors and vendors that align with our values, which means they will be/have: trauma informed, cutting-edge research, menopause-educated support tools, be LGBTQ+ allies.\n\nWE BELIEVE WOMEN. We aim to improve the quality of women’s lives--specifically the second half, by giving them the best tools and information possible. We hope to empower YOU to create a much-deserved team of support and resources for YOUR WELL-BEING.\n\nYou matter, we need you. We need your voice.\n\nWe aim to feature women-led businesses, professionals, artists and creatives. We will also have practitioners, such as Physical Therapists, Nutritionists and massage therapists that you can meet and greet in our Hormone Village vendor hall.",
  },
  {
    question: "Are you just going to tell me to lose weight and exercise more?",
    answer:
      "Oh we are 100% positive you’ve told yourself this MORE than enough. How’s that working for you? No love, we aren’t going to add heaping piles of shame and blame onto your plate. Nor do we want to overwhelm you. We are creating a safe, supportive place for you to learn, feel, process and understand your lived experiences.",
  },
  {
    question: "Aren’t I TOO YOUNG FOR THIS?",
    answer:
      "We think if you’re 35ish, you’re probably having symptoms you’re not even REALIZING could be menopause related. If you’re under 35, sure, maybe you can wait!\n\nThen again, if you hope to be lucky enough to live to 50, YOU WILL HAVE MENOPAUSE. Menopause--which is technically the cessation of your period for 12 months, can come on early due to many factors. Knowing the symptoms, your cycle, and the effects of your hormones or lack of them, can help you paint a more holistic picture of your overall health.\n\nIF NOTHING ELSE, start tracking your period cycles regardless of age. If you don’t have a cycle, TRACK YOUR SYMPTOMS. If you do have a cycle track YOUR SYMPTOMS.\n\nKnowledge is power. Know your body. Start today! We believe in you! More research is needed and won’t happen unless we demand it!",
  },
  {
    question: "Aren’t I TOO OLD FOR THIS?",
    answer:
      "If you’re well into your 60s or beyond, maybe you are? But MAYBE NOT! It might be nice to know ALL of your current options/ learn all the things YOU WISH YOU’D KNOWN so you can help loved ones, or understand your history better. And may we remind you that your doctor could very-well be citing 20-year-old misconceptions about Hormone Replacement Therapy?\n\nPlease please please, if you are passionate, curious or interested, even if you’ve mastered menopause WE WOULD LOVE TO HAVE YOU.\n\nAt MENOFEST the older you are the more respect you command.\n\nWe want your voice, your perspective and your experience. You’re not too old. Especially at MENOFEST!",
  },
];

export default function Home() {
  const eventDate = new Date("2026-08-22T09:00:00").getTime();
  const [daysLeft, setDaysLeft] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [whyOpen, setWhyOpen] = useState(false);

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
    <main className="bg-[#f2b6c5] text-[#231f20]">
      {/* Ticker */}
      <div className="bg-[#f0557c] text-white py-3 px-4 text-center text-sm md:text-base font-bold tracking-wide">
        CLAWS UP • TIME TO ROAR • IT’S NOT IN YOUR HEAD • IT’S IN YOUR HORMONES • A MIDLIFE UPRISING
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#f2b6c5]/90 backdrop-blur-md border-b border-[#231f20]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#tickets"
            className="font-black text-xl tracking-tight hover:text-[#f0557c] transition"
            onClick={() => setMenuOpen(false)}
          >
            MENO FEST
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.22em]">
            <a href="#about" className="hover:text-[#f0557c] transition">About</a>
            <a href="#experience" className="hover:text-[#f0557c] transition">Experience</a>
            <a href="#speakers" className="hover:text-[#f0557c] transition">Speakers</a>
            <a href="#schedule" className="hover:text-[#f0557c] transition">Your Ticket Includes</a>
            <a href="#faq" className="hover:text-[#f0557c] transition">FAQ</a>
            <a href="#sponsors" className="hover:text-[#f0557c] transition">Sponsors</a>
          </div>

          <div className="hidden md:block">
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f0557c] hover:bg-[#ee2d28] hover:scale-105 transition duration-300 text-white px-6 py-3 rounded-full text-sm font-bold"
            >
              GET TICKETS
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden border border-[#231f20] rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.18em]"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#f2b6c5] border-t border-[#231f20]/20 px-6 py-6">
            <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.22em]">
              {[
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Speakers", "#speakers"],
                ["Your Ticket Includes", "#schedule"],
                ["FAQ", "#faq"],
                ["Sponsors", "#sponsors"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#f0557c] transition"
                >
                  {label}
                </a>
              ))}

              <a
                href={ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f0557c] text-white text-center px-6 py-4 rounded-full mt-2"
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
        className="noise-bg relative overflow-hidden min-h-[82vh] flex items-center justify-center text-center px-6 py-16 md:py-24 bg-[#f2b6c5]"
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.45em] text-sm md:text-base mb-8 text-[#231f20] font-bold">
            August 22, 2026 • Provo, Utah
          </p>

          <div className="mb-10 flex justify-center">
  <Image
    src="/meno-paw.png"
    alt="Meno Fest paw logo"
    width={320}
    height={320}
    priority
    className="w-full max-w-[260px] sm:max-w-[320px] h-auto"
  />
</div>

          <h1 className="sr-only">Meno Fest</h1>

          <p className="text-2xl sm:text-4xl md:text-6xl leading-[1.05] max-w-5xl mx-auto mb-8 font-black">
            It’s not in your head,
            <br />
            it’s in your hormones.
          </p>
          <h1 className="sr-only">Meno Fest</h1>

          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 text-[#231f20]/80">
            This is your invitation to the rest of your life.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f0557c] hover:bg-[#ee2d28] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg font-bold"
            >
              GET TICKETS
            </a>

            <a
              href="#about"
              className="border-2 border-[#231f20] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#231f20] hover:text-white hover:scale-105 transition duration-300"
            >
              WHAT IS MENO FEST?
            </a>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="px-6 py-16 bg-[#231f20] text-white text-center border-t border-[#231f20]/20">
        <p className="uppercase tracking-[0.35em] text-[#f2b6c5] mb-4">
          Countdown to the uprising
        </p>
        <h2 className="text-6xl md:text-8xl font-black mb-4">{daysLeft}</h2>
        <p className="text-2xl">days until Meno Fest</p>
      </section>

      {/* Statement */}
      <section className="relative overflow-hidden bg-[#f0557c] text-white px-6 py-28">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#ede50f_0%,transparent_55%)]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-[#ede50f] text-sm font-bold mb-8">
            Midlife is an uprising!
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-black mb-10">
            We need you IN YOUR POWER.
            <br />
            Feeling awesome.
          </h2>

          <p className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-white">
            Let’s end unnecessary suffering, and let’s make the rest of your life BETTER.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-28 bg-white border-t border-[#231f20]/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#f0557c] font-bold mb-4">
              What is Meno Fest?
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
              A one-day conference, workshop, festival-like affair.
            </h2>
          </div>

          <div className="text-xl leading-relaxed text-[#231f20]/80 space-y-6">
            <p>
              Meno Fest is a one-day conference, workshop, festival-like affair, with one goal:
              We aim to improve the quality of women’s lives--specifically the second half,
              by giving them the best tools and information possible.
            </p>
            <p>
              WE BELIEVE WOMEN. We hope to empower YOU to find support and resources for YOUR WELL-BEING.
              Every aspect of it.
            </p>
            <p className="font-bold text-[#231f20]">
              You matter, we need you. We need your voice. We need you feeling strong, vivacious
              and full of peaceful power--because YOU are what this world needs.
            </p>
            <p>
              But you can’t do any of that if you feel like crap! You get to have fun, be YOU and feel better.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 py-28 bg-[#f2b6c5] border-t border-[#231f20]/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#231f20] font-bold mb-4">
            Why this matters
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-10">
            Your doctor does not have the information you need.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-transparent rounded-[2rem] p-8 border border-[#231f20]/20 shadow-sm">
              <p className="text-5xl font-black text-[#f0557c] mb-4">100%</p>
              <p className="text-lg leading-relaxed">
                of women over 50 will experience menopause. All of them. No work-arounds or injectables available!
              </p>
            </div>

            <div className="bg-transparent rounded-[2rem] p-8 border border-[#231f20]/20 shadow-sm">
              <p className="text-5xl font-black text-[#2b9dd8] mb-4">1–3</p>
              <p className="text-lg leading-relaxed">
                hours of education TOTAL about menopause and their related symptoms is what General Practitioners receive.
              </p>
            </div>

            <div className="bg-[#231f20] text-white rounded-[2rem] p-8 shadow-sm">
              <p className="text-5xl font-black text-[#ede50f] mb-4">ROAR!</p>
              <p className="text-lg leading-relaxed text-white">
                Medical research for female bodies and genitals is 100 years behind the research for men’s bodies. IT’S UP TO US.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For You */}
      <section className="px-6 py-24 bg-white border-t border-[#231f20]/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#f0557c] font-bold mb-4">
              This conference is for you if
            </p>

            <h3 className="text-4xl md:text-5xl leading-tight font-bold mb-8">
              You have a female body, hormones, questions, symptoms, or a sense that something is off.
            </h3>

            <ul className="space-y-4 text-lg">
              <li>🔥 You have hormones, ovaries, a cervix or a vulva, vaginas also welcome.</li>
              <li>🔥 You’d like to understand what’s changing in your body and why.</li>
              <li>🔥 You’d like access to the most recent, relevant and accurate women’s health research--no agenda, just facts.</li>
              <li>🔥 You have anxiety, brain fog, lack of sleep, inexplicable rage, night sweats, hot flashes, lethargy, joint pain, or anything else that you can FEEL is off.</li>
              <li>🔥 You feel like you might need to change everything in your life or explode, burst into tears, break into laughter, or high kick and cackle with liberation.</li>
            </ul>
          </div>

          <div className="bg-[#f2b6c5] rounded-[2rem] p-10 border border-[#231f20]/20 shadow-sm">
            <h3 className="text-4xl md:text-5xl leading-tight font-bold mb-8">
              This conference is not for you if...
            </h3>

            <ul className="space-y-4 text-lg">
              <li>❌ You believe that menopause or perimenopause is a fad.</li>
              <li>❌ You think we can give you a pill to help you “GET YOUR BODY BACK” — what does that even mean???</li>
              <li>❌ You believe you can outsmart menopause because you’re so young and hot it couldn’t happen to YOU! Awww, you are but it will!</li>
              <li>❌ You believe exercising, eating healthy and getting enough sleep is ALL YOU NEED.</li>
              <li>❌ You think all accredited nurses, doctors and practitioners are out to get you--they’re not, most just don’t have the right info.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-28 bg-[#f2b6c5] border-t border-[#231f20]/20">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#231f20] font-bold text-center mb-4">
            The Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] text-center mb-16">
            Not your mother’s menopause conference.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["🧠", "Research Led - Female Focused", "Our mission is education! This means we are bringing in the latest studies, with the most-informed and up-to-date professionals in the fields related to Perimenopause, Menopause, and women’s health."],
              ["🧊", "Thirst! Hot Flash Lounge", "Get this woman a beverage! We’re excited to partner with Thirst Drinks for caffeine and sugar! For education/speakers we will all stay together! But for breaks and mingling we’ve got this designated space for you to CHILLAX."],
              ["🐾", "Cougar Puberty Plaza", "Our open-market breakout space for women-led businesses, professionals, artists and creatives! We will also have practitioners such as Physical Therapists, Nutritionists and massage therapists you can connect with."],
            ].map(([icon, title, copy], index) => (
              <div
                key={title}
                className={`rounded-[2rem] p-8 shadow-sm border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 1
                    ? "bg-[#f0557c] text-white border-[#f0557c] hover:scale-[1.02]"
                    : "bg-white border-[#231f20]/20"
                }`}
              >
                <p className="text-5xl mb-6">{icon}</p>
                <h3 className="text-3xl font-bold mb-4">{title}</h3>
                <p className="text-lg leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="px-6 py-28 bg-white border-t border-[#231f20]/20">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#f0557c] font-bold text-center mb-4">
            ARE YOU LIKE EVEN A LADY DOCTOR?!
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-black text-center mb-8 max-w-6xl mx-auto">
            Hosted by Aimee Hopkin and Alison Faulkner.
          </h2>

          <p className="max-w-4xl mx-auto text-center text-lg md:text-xl leading-relaxed mb-20 text-[#231f20]/80">
            This conference is happily hosted by Psychiatric Nurse Practitioner and Women’s Mental Health
            and Menopause specialist, Aimee Hopkin, and the slightly-less-accredited but deeply enthusiastic
            Alison Faulkner, who has 20-years of hands-on experience working in women’s empowerment,
            and mental wellness.
          </p>

          {/* Hosts row */}
          <div className="flex justify-center mb-8">
            {/* Co-hosts: Aimee + Alison */}
            <div className="w-full md:w-1/2 md:pr-4 bg-[#f2b6c5] rounded-[2rem] p-8 border border-[#231f20]/20 shadow-sm flex flex-col">
              <div className="rounded-[1.5rem] mb-6 overflow-hidden">
                <Image
                  src="/aimee-alison-bio-menofest.png"
                  alt="Aimee Hopkin and Alison Faulkner"
                  width={1000}
                  height={1079}
                  className="w-full h-auto"
                />
              </div>
              <p className="uppercase tracking-[0.2em] text-[#f0557c] font-bold text-sm mb-3">
                Your Co-Hosts
              </p>
              <h3 className="text-3xl font-bold mb-3">Aimee Hopkin &amp; Alison Faulkner</h3>
              <p className="text-lg leading-relaxed">
                Aimee is a Psychiatric Nurse Practitioner and Women’s Mental Health and Menopause specialist. Alison is a women’s empowerment leader with 20-years of hands-on experience in mental wellness and community-building.
              </p>
            </div>
          </div>

          {/* Speaker grid: 4 columns, 4 announcement spots */}
          <div className="grid md:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#231f20] text-white rounded-[2rem] p-8 border border-[#231f20]/20 shadow-sm flex flex-col"
              >
                <div className="bg-[#f0557c] flex-1 min-h-[14rem] rounded-[1.5rem] mb-6 flex items-center justify-center text-5xl">
                  🔥
                </div>
                <p className="uppercase tracking-[0.2em] text-[#ede50f] font-bold text-sm mb-3">
                  Coming Soon
                </p>
                <h3 className="text-3xl font-bold mb-3">Speaker {i + 1}</h3>
                <p className="text-lg leading-relaxed text-white">
                  Speakers and information from sources we personally trust and believe to have the most-up-to-date, medically relevant, researched information.
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-[#f2b6c5] rounded-[1.5rem] border border-[#231f20]/20 overflow-hidden">
              <button
                type="button"
                onClick={() => setWhyOpen(!whyOpen)}
                className="w-full text-left p-6 md:p-8 flex justify-between gap-6 items-center"
              >
                <span className="text-xl md:text-2xl font-bold">Why us, why now?</span>
                <span className="text-3xl text-[#f0557c]">{whyOpen ? "−" : "+"}</span>
              </button>

              {whyOpen && (
                <div className="px-6 md:px-8 pb-8 text-lg leading-relaxed text-[#231f20]/80 space-y-4">
                  <p>For this conference we will be hosting speakers and information from sources we personally trust and believe to have the most-up-to-date, medically relevant, researched information. Big pharma doesn’t have all the answers, and neither does the witch-doctor. However, we believe in the lived experiences of women. And we know it takes ALL OF THE THINGS to find wellness.</p>
                  <p>While we can’t promise to have every answer, we are committed to helping women GET MORE ANSWERS about their health. We are beyond confident we’re more trustworthy than your favorite Tik-Tok account and more current than your GYNO.</p>
                  <p className="font-bold text-[#231f20] uppercase tracking-[0.1em]">WHY US, WHY NOW?</p>
                  <p>As Aimee (now 50) began to face her own menopause symptoms, she, at the time a labor and delivery nurse, could not believe the lack of resources and information available to her, IN HER OWN FIELD.</p>
                  <p>Alison (42) has spent her entire adult life looking doctors and practitioners in the eye expressing severe mental and hormonal health problems to mostly have them suggest, “Have you tried taking birth control?” YES, AND IT DOES NOT HELP.</p>
                  <p>Disheartened by lots of unnecessary suffering, and frustrated that after-the-fact, so many simple solutions were and ARE available, Aimee and Alison have decided that the best thing they could do is:</p>
                  <p className="font-bold text-[#231f20]">GET THE INFORMATION TO THE WOMEN. AND THE WOMEN WILL SAVE THE WORLD.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Your Ticket Includes */}
      <section id="schedule" className="px-6 py-28 bg-white border-t border-[#231f20]/20">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#f0557c] font-bold mb-4">
            Your Ticket
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-12">
            What is included in your ticket.
          </h2>

          <ul className="space-y-4 text-lg">
            <li>🔥 Access to a dozen+ women’s health professionals to answer questions and fill your cup!</li>
            <li>🔥 6 hours of efficient, purposeful, entertaining programming designed to connect and educate!</li>
            <li>🔥 A custom only-available-at-the-event workbook: so you don’t have to freak out and think you need to take notes all day!</li>
            <li>🔥 A delicious catered lunch, snacks, candy and treats! You will not have low blood sugar on our watch!</li>
            <li>🔥 Our Thirst! Hot Flash Lounge sponsor will be providing mixed soda drinks and treats!</li>
            <li>🔥 A really cute bag charm/ keychain AWWW! And other not-lame swag!</li>
            <li>🔥 More details to come!</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-28 bg-[#f2b6c5] border-t border-[#231f20]/20">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#231f20] font-bold mb-4">
            FAQ
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-12">
            Things you’re probably wondering.
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="bg-white rounded-[1.5rem] border border-[#231f20]/20 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 md:p-8 flex justify-between gap-6 items-center"
                >
                  <span className="text-xl md:text-2xl font-bold">{faq.question}</span>
                  <span className="text-3xl text-[#f0557c]">{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && (
                  <div className="px-6 md:px-8 pb-8 text-lg leading-relaxed text-[#231f20]/80 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="px-6 py-28 bg-white border-t border-[#231f20]/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#f0557c] font-bold mb-4">
            Partner With Us
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
            Sponsor the midlife uprising.
          </h2>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed mb-10 text-[#231f20]/80">
            We will have sponsors and vendors that align with our values: trauma informed,
            cutting-edge research, menopause-educated support tools, and LGBTQ+ allies.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a href="https://docs.google.com/presentation/d/e/2PACX-1vRPt7rge92ceauQk-_XD8-OeoAKzOdsclEWC3IBwz97AoO4lrbZQ2pzk3WoUn5Hg9ZSn5FWuq0u23oq/pub?start=false&loop=false&delayms=3000" className="bg-[#f0557c] hover:bg-[#ee2d28] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg font-bold cursor-pointer">
              BECOME A SPONSOR
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#231f20] text-white px-6 py-12 text-center">
        <h2 className="text-3xl font-black mb-4">MENO FEST</h2>
        <p className="text-[#f2b6c5] mb-6">
          It’s not in your head, it’s in your hormones.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.15em]">
          <a href="#about" className="hover:text-[#f0557c] transition">About</a>
          <a href="#experience" className="hover:text-[#f0557c] transition">Experience</a>
          <a href="#speakers" className="hover:text-[#f0557c] transition">Speakers</a>
          <a href="#schedule" className="hover:text-[#f0557c] transition">Your Ticket Includes</a>
          <a href="#faq" className="hover:text-[#f0557c] transition">FAQ</a>
          <a href="#sponsors" className="hover:text-[#f0557c] transition">Sponsors</a>
        </div>
      </footer>
    </main>
  );
}
