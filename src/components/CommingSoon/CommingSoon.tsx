import React from "react";

const CommingSoon = () => {
  return (
    <main className="relative flex items-center flex-grow overflow-hidden py-50 ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-20 h-20 bg-indigo-500 rounded-full top-20 left-10 opacity-20 floating"></div>
        <div className="absolute w-32 h-32 bg-purple-500 rounded-full top-40 right-20 opacity-20 floating-slow"></div>
        <div className="absolute w-24 h-24 bg-pink-500 rounded-full bottom-20 left-1/4 opacity-20 floating-slower"></div>
        <div className="absolute w-16 h-16 bg-indigo-300 rounded-full top-1/3 right-1/3 opacity-20 floating"></div>
      </div>

      <div className="container relative z-10 px-4 py-12 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Amazing
              </span>{" "}
              is Coming Soon
            </h1>
            <p className="max-w-lg mx-auto mb-8 text-lg text-indigo-200 md:text-xl md:mx-0">
              We're working hard to bring you our new platform. Sign up to be
              the first to know when we launch and get exclusive early access.
            </p>

            <div className="grid max-w-md grid-cols-4 gap-4 mx-auto mb-10 md:mx-0">
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">15</div>
                <div className="text-sm text-indigo-300">Days</div>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">08</div>
                <div className="text-sm text-indigo-300">Hours</div>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">23</div>
                <div className="text-sm text-indigo-300">Minutes</div>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">42</div>
                <div className="text-sm text-indigo-300">Seconds</div>
              </div>
            </div>

            <div className="max-w-md mx-auto md:mx-0">
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/10 backdrop-blur-sm border-white/20"
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-medium transition-all duration-200 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
              <p className="mt-3 text-xs text-indigo-300">
                We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
            </div>
            <div className="flex justify-center mt-10 space-x-6 md:justify-start">
              <a
                href="#"
                className="text-indigo-300 transition-colors duration-200 hover:text-white"
              >
                <i className="text-xl fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-indigo-300 transition-colors duration-200 hover:text-white"
              >
                <i className="text-xl fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-indigo-300 transition-colors duration-200 hover:text-white"
              >
                <i className="text-xl fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-indigo-300 transition-colors duration-200 hover:text-white"
              >
                <i className="text-xl fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl"></div>
              <img
                src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png"
                alt="Illustration"
                className="relative z-10 mx-auto floating-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommingSoon;
