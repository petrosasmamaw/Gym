import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center gap-6">
      <h1 className="text-5xl font-extrabold text-gray-800">
        Welcome to <span className="text-indigo-600">FitHub</span>
      </h1>
      <p className="text-gray-500 text-lg max-w-xl">
        Your ultimate destination for fitness and wellness.
         Join our community of fitness enthusiasts and achieve 
         your health goals with expert guidance, state-of-the-art 
         facilities, and a supportive environment. Whether you're a beginner 
         or a seasoned athlete, FitHub has something for everyone. Let's embark 
         on this fitness journey together!
      </p>
      <div className="flex gap-4 mt-4">
        <Link
          href="/gym"
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700"
        >
          OUR GYM
        </Link>
        <Link
          href="/register"
          className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-50"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
