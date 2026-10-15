
export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-60px)] flex flex-col overflow-hidden bg-sky-300">
      <main className="px-8 py-8 flex-1">
        <h1 className="text-center text-4xl mb-4 font-bold">
          Hello, I'm Anthony
        </h1>
        <p className="text-center">
          Welcome to my portfolio!
        </p>

        <section id="about" className="mt-8">
          <h2 className="text-xl font-bold">
            About Me
          </h2>
          <p> I'm A computer Engineering Student at UCF Who is very interested in embedded Systems, Sofware Development and robotics. </p>
        </section>

      </main>
      <div className="absolute bottom-32 left-20 w-8 h-32 bg-amber-800"></div>
      <div className="absolute bottom-64 left-12 w-24 h-24 bg-green-700"></div>
      <div className="bg-green-600 h-8"></div>
      <div className="bg-amber-900 h-24"></div>
      </div>
  );
}
