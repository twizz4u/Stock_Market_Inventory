import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl z-10 relative">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold tracking-wide mb-6 shadow-sm">
              <span className="flex w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 relative">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              </span>
              Fresh & Organic Produce
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Live stock market with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                fresh chicken
              </span>
              , fish and turkey
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
              We sell fresh and affordable Goat meat, Beef, chicken, fish and
              turkey at the best prices, with fast delivery right to your
              doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-emerald-600/30 transition duration-300 transform hover:-translate-y-1 active:translate-y-0">
                Shop Now
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-900 font-semibold py-4 px-8 rounded-full shadow-md border border-slate-200 transition duration-300 transform hover:-translate-y-1 active:translate-y-0">
                Explore Market
              </button>
            </div>
          </div>

          {/* Right Column - Image Collage Layout */}
          <div className="relative w-full bg-amber- h-[450px] sm:h-[500px] lg:h-[600px] mt-10 lg:mt-0 flex items-center justify-center">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100/60 to-teal-50/60 rounded-full blur-3xl pointer-events-none"></div>

            {/* Collage Image 1: Top Left (chicken-legs-plate) */}
            <div className="absolute top-[5%] left-[5%] w-[55%] h-[50%] rounded-3xl overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 z-10 border-4 border-white bg-slate-100">
              <img
                src="images/chicken-legs-plate.jpg"
                alt="Fresh chicken legs plate"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Collage Image 2: Top Right (chicken-farm) */}
            <div className="absolute top-[15%] right-[5%] w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 z-20 border-4 border-white bg-slate-100">
              <img
                src="images/fresh-raw-meat-dark-slate.jpg"
                alt="Our chicken farm"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Collage Image 3: Bottom Center (white-chicken-farm) */}
            <div className="absolute bottom-[5%] left-[50%] -translate-x-1/2 w-[60%] h-[45%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 z-30 border-4 border-white bg-slate-100">
              <img
                src="images/white-chicken-farm.jpg"
                alt="White chicken farm"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute bottom-[18%] right-[5%] md:right-[10%] bg-white p-4 rounded-2xl shadow-xl z-40 transform rotate-3 hover:-translate-y-2 transition-transform duration-300 flex items-center gap-3">
              <div className="bg-emerald-100 p-2.5 rounded-full">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  100% Fresh
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Farm to table
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
