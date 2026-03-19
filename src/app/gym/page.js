import React from "react";

const images = [
  
  "/images/download (2).jpg", // now hero (was coaching)
  "/images/download (1).jpg",
  "/images/download.jpg", // now coaching (was hero)
  "/images/download (3).jpg",
  "/images/Full-Body Home Workouts for Busy Moms (No Equipment Needed).jpg",
  "/images/Muskelaufbau_ 9 Tipps, die Männer beachten sollten.jpg",
];

export default function GymPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">25+ Years</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              SCULPT YOUR BODY,
              <br /> ELEVATE YOUR SPIRIT
            </h1>
            <p className="mt-6 text-gray-300 max-w-2xl">
              Dedicated to igniting your fitness journey with modern facilities, expert coaches,
              and results-driven programming. Join a community of over 10,000 active members.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-3 bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition">
                Try For Free
              </a>
              <a href="#" className="inline-flex items-center gap-3 border border-gray-700 px-5 py-3 rounded-full text-gray-200 hover:bg-gray-900 transition">Schedule Time</a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center -space-x-3">
                <img src="/images/download (1).jpg" alt="member" className="h-10 w-10 rounded-full border-2 border-black" />
                <img src="/images/download (2).jpg" alt="member" className="h-10 w-10 rounded-full border-2 border-black" />
                <img src="/images/download (3).jpg" alt="member" className="h-10 w-10 rounded-full border-2 border-black" />
              </div>
              <div>10,000+ active members</div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img src={images[0]} alt="hero" className="w-full h-auto rounded-3xl shadow-2xl" />
              <div className="absolute left-6 bottom-6 bg-black/60 text-white px-4 py-2 rounded-lg">Modern Facilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-900/60 p-6 rounded-xl flex items-start gap-4">
            <div className="h-12 w-12 rounded-md bg-yellow-400 flex items-center justify-center text-black font-bold">85%</div>
            <div>
              <h4 className="font-semibold">Happy Global Customers</h4>
              <p className="text-gray-400 text-sm mt-1">Proven track record and member success stories.</p>
            </div>
          </div>

          <div className="bg-gray-900/60 p-6 rounded-xl flex items-start gap-4">
            <div className="h-12 w-12 rounded-md bg-yellow-400 flex items-center justify-center text-black font-bold">90%</div>
            <div>
              <h4 className="font-semibold">Advanced Gym Equipments</h4>
              <p className="text-gray-400 text-sm mt-1">Best-in-class strength and cardio machines.</p>
            </div>
          </div>

          <div className="bg-gray-900/60 p-6 rounded-xl flex items-start gap-4">
            <div className="h-12 w-12 rounded-md bg-yellow-400 flex items-center justify-center text-black font-bold">99%</div>
            <div>
              <h4 className="font-semibold">Qualified Expert Trainers</h4>
              <p className="text-gray-400 text-sm mt-1">Certified coaches driving results safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About + Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold">Dedicated to Igniting Your Fitness Health</h3>
            <p className="mt-4 text-gray-300">Quam elementum nullam quis dui, rutrum tempor, urna. Habitasse platea dictumst. Our expert team and curated spaces help you stay consistent and progress.</p>
            <div className="mt-6 space-y-3">
              <div className="inline-flex items-center gap-3 bg-gray-900/40 px-4 py-2 rounded-full">Modern Facilities</div>
              <div className="inline-flex items-center gap-3 bg-gray-900/40 px-4 py-2 rounded-full">Expert Team</div>
              <div className="inline-flex items-center gap-3 bg-gray-900/40 px-4 py-2 rounded-full">Fitness Focus</div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.slice(1).map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden">
                <img src={src} alt={`gallery-${i}`} className="w-full h-56 object-cover" />
                <div className="absolute left-4 bottom-4 bg-black/60 text-white px-3 py-1 rounded">{i === 0 ? "Gym Floor" : i === 1 ? "Coaching" : "Recovery"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="bg-gray-900/80 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-2xl font-bold">Experience Reliable Fitness Services</h4>
          <p className="mt-3 text-gray-400">Join hundreds of members who transformed their lives. Start your first session today.</p>
          <div className="mt-6">
            <a href="#" className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">More Services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
