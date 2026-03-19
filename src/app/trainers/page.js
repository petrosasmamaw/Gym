import React from "react";

const trainers = [
  { name: "Liam Carter", role: "Strength Coach", img: "/images/man trianer 1.jpg", bio: "Specializes in hypertrophy and functional strength programs for all levels." },
  { name: "Noah Bennett", role: "Cardio & Conditioning", img: "/images/man trianer 2.jpg", bio: "High-intensity interval training and endurance planning to boost performance." },
  { name: "Ethan Brooks", role: "Mobility Specialist", img: "/images/man trianer 3.jpg", bio: "Focuses on joint health, movement quality, and injury prevention." },
  { name: "Mason Reed", role: "Powerlifting Coach", img: "/images/man trianer 4.jpg", bio: "Programming for strength athletes and safe heavy lifting technique." },
  { name: "Lucas Hayes", role: "Personal Trainer", img: "/images/man trianer 5.jpg", bio: "One-on-one coaching with personalized plans and lifestyle guidance." },

  { name: "Olivia Moore", role: "Group Classes Lead", img: "/images/woman trianer 1.jpg", bio: "Leads motivating group sessions with focus on form and community." },
  { name: "Ava Thompson", role: "Yoga & Recovery", img: "/images/woman trianer 2.jpg", bio: "Combines restorative yoga and recovery protocols for better results." },
  { name: "Sophia Gray", role: "Nutrition Coach", img: "/images/woman trianer 3.jpg", bio: "Practical nutrition plans to support training and daily life." },
  { name: "Isabella Scott", role: "Functional Trainer", img: "/images/woman trianer 4.jpg", bio: "Functional movement patterns for real-world strength and agility." },
  { name: "Mia Rivera", role: "Wellness Coach", img: "/images/woman trianer 5.jpg", bio: "Holistic coaching covering mindset, recovery, and sustainable habits." },
];

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <section className="max-w-7xl mx-auto px-6">
        <div id="trainers" className="mb-8">
          <h1 className="text-4xl font-extrabold">Meet Our Trainers</h1>
          <p className="mt-3 text-gray-300 max-w-3xl">Our certified team combines experience, passion, and proven methods to help you reach your goals. Choose a trainer that fits your needs and book a session today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trainers.map((t, i) => (
            <div key={i} className="bg-gray-900/60 rounded-xl overflow-hidden p-0">
              <div className="w-full h-48 bg-gray-800">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <div className="text-yellow-400 text-sm font-medium mt-1">{t.role}</div>
                <p className="mt-2 text-gray-400 text-sm">{t.bio}</p>
                <div className="mt-4">
                  <a href="#" className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">Contact</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
