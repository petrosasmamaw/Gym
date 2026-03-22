import React from "react";
import TrainersClient from './TrainersClient';

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <section className="max-w-7xl mx-auto px-6">
        <div id="trainers" className="mb-8">
          <h1 className="text-4xl font-extrabold">Meet Our Trainers</h1>
          <p className="mt-3 text-gray-300 max-w-3xl">Our certified team combines experience, passion, and proven methods to help you reach your goals. Choose a trainer that fits your needs and book a session today.</p>
        </div>
        <TrainersClient />
      </section>
    </main>
  );
}
