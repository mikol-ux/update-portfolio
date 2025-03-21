import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="fixed top-4 z-40 flex justify-between items-center w-[90%] 2xl:w-[80%] max-w-6xl mx-auto px-6 py-3 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-full shadow-lg">
        <ul className="flex w-full justify-between text-gray-300 text-sm md:text-base">
          {["Home", "About", "Skills", "Resume", "Projects", "Contact"].map(
            (item, index) => (
              <li
                key={index}
                className="px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left md:basis-[60%] p-10 lg:pl-[160px]">
          <h1 className="con-text-2xl font-bold">Hello!</h1>
          <h2 className="con-text-xl">
            I&apos;m <span className="text-gray-400">Nandana...</span>
          </h2>
          <p className="text-gray-400 max-w-md md:max-w-lg mx-auto md:mx-0 text-base md:text-lg con-text-lg">
            Passionate UI/UX designer creating intuitive, user-friendly digital
            experiences with a blend of creativity and functionality.
          </p>
          <div className="flex flex-col items-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
            <button className="con-text-lg px-6 py-3 border border-gray-400 rounded-full text-white hover:bg-white hover:text-black transition">
              Let&apos;s Talk..!
            </button>
            <button className="con-text-lg px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
              View My Work
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:basis-[40%] w-full mt-10 md:mt-0">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Decorative Text */}
      <h1 className="absolute bottom-10 text-3xl md:text-6xl 2xl:text-8xl font-extrabold opacity-10 select-none">
        UX/UI DESIGNER
      </h1>
    </div>
  );
}
