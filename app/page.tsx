export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-white to-gray-50 px-4">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-blue-600">Idraak AI</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Learn Artificial Intelligence the modern way.  
        Hands-on projects, real-world applications, and guided learning paths.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100">
          Explore Courses
        </button>
      </div>
    </section>
  );
}