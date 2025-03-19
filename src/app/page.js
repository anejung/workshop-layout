import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white-100">
      <h1 className="text-4xl font-bold text-black-800 mb-4">Welcome to My Website</h1>
      <p className="text-lg text-green-700">
        This is a custom homepage built with Next.js and Tailwind CSS!
      </p>
    </main>
  );
}
