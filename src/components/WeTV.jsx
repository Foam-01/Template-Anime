import React, { useState, useEffect } from "react";

const WeTV = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const bannerData = [
    {
      title: "CYBERPUNK REBELLION",
      ageRating: "18+",
      audioSubtitle: "Sub | Dub",
      description:
        "In a futuristic metropolis, a hacker group fights against corporate tyranny. Their code is their weapon, their freedom is their goal.",
      image: "/image/Poster1.webp",
      gradient: "from-transparent to-black/90",
      alignment: "justify-start",
      textColor: "text-white",
      titleShadowClass: "text-shadow-none", // ไม่มีแสงเงา
    },
    {
      title: "MAGICAL ACADEMY",
      ageRating: "13+",
      audioSubtitle: "Sub | Dub",
      description:
        "Follow young mages as they hone their skills, forge friendships, and uncover a conspiracy threatening their prestigious magical school.",
      image: "/image/Poster.jpg",
      gradient: "from-transparent to-black/90",
      alignment: "justify-start",
      textColor: "text-white",
      titleShadowClass: "text-shadow-none", // ไม่มีแสงเงา
    },
    {
      title: "STARSHIP ODYSSEY",
      ageRating: "All",
      audioSubtitle: "Sub | Dub",
      description:
        "Embark on an epic journey through distant galaxies, discovering new planets and ancient civilizations. A universe of adventure awaits!",
      image: "/image/Poster1.webp",
      gradient: "from-transparent to-black/90",
      alignment: "justify-start",
      textColor: "text-white",
      titleShadowClass: "text-shadow-none", // ไม่มีแสงเงา
    },
    {
      title: "ANCIENT MYSTERIES",
      ageRating: "16+",
      audioSubtitle: "Sub | Dub",
      description:
        "Uncover the secrets of forgotten empires and powerful artifacts in a world where magic and history intertwine. Danger lurks at every turn.",
      image: "/image/Poster.jpg",
      gradient: "from-transparent to-black/90",
      alignment: "justify-start",
      textColor: "text-white",
      titleShadowClass: "text-shadow-none", // ไม่มีแสงเงา
    },
  ];

  const contentData = {
    popularSeries: [
      { title: "Love Story 2024", image: "/image/Poster.jpg" },
      { title: "Mystery Night", image: "/image/Poster1.webp" },
      { title: "School Romance", image: "/image/Poster.jpg" },
      { title: "Time Travel", image: "/image/Poster1.webp" },
      { title: "Fantasy World", image: "/image/Poster.jpg" },
      { title: "City Life", image: "/image/Poster1.webp" },
    ],
    movies: [
      { title: "Action Hero", image: "/image/Poster1.webp" },
      { title: "Romantic Comedy", image: "/image/Poster.jpg" },
      { title: "Thriller Night", image: "/image/Poster1.webp" },
      { title: "Adventure Quest", image: "/image/Poster.jpg" },
      { title: "Sci-Fi Future", image: "/image/Poster1.webp" },
      { title: "Drama Story", image: "/image/Poster.jpg" },
    ],
    variety: [
      { title: "Music Show", image: "/image/Poster.jpg" },
      { title: "Comedy Hour", image: "/image/Poster1.webp" },
      { title: "Talk Show", image: "/image/Poster.jpg" },
      { title: "Game Show", image: "/image/Poster1.webp" },
      { title: "Cooking Show", image: "/image/Poster.jpg" },
      { title: "Travel Guide", image: "/image/Poster1.webp" },
    ],
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const ContentCard = ({ title, type, image }) => (
    <div className="group cursor-pointer">
      <div className="relative bg-white/10 backdrop-blur-md border border-gray-700/20 rounded-xl overflow-hidden transition-all duration-300 group-hover:transform group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-teal-500/60 group-hover:bg-gray-800/40 animate-fade-in-up card-hover-animation">
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ดูเลย!
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="font-bold text-lg mb-1 text-teal-300 group-hover:text-cyan-400 transition-colors duration-200">
            {title}
          </div>
          <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-200 text-gray-300">
            {type} • HD
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white font-sans overflow-x-hidden relative">
      {/* Anime-themed background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 background-pattern animate-pulse-slow"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-700 shadow-xl shadow-gray-900/30">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* YuTV Logo/Button */}
          <button
            onClick={() => setCurrentPage("home")} // เพิ่ม onClick handler
            className="cursor-pointer text-4xl font-extrabold text-teal-400 drop-shadow-neon tracking-wider focus:outline-none" // เพิ่ม focus:outline-none เพื่อเอา outline ตอน focus ออก
            aria-label="Go to Home Page" // เพิ่ม aria-label เพื่อการเข้าถึง
          >
            YuTV
          </button>
          <ul className="hidden md:flex gap-8">
            {[
              { key: "home", label: "Home", icon: "🏠" },
              { key: "channel", label: "New", icon: "✨" },
            ].map((item) => (
              <li
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`relative cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 text-lg
                  hover:bg-gray-700/30 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/40
                  ${
                    currentPage === item.key
                      ? "bg-gradient-to-r from-gray-700 to-teal-600 text-white shadow-lg nav-active-neon-blue"
                      : "text-white/80 hover:text-white"
                  }
                  flex items-center space-x-2
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-semibold">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 pt-24 pb-8 relative z-10">
        {/* Home Page */}
        {currentPage === "home" && (
          <div className="space-y-16">
            {/* Banner Slider */}
            <section className="relative overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/60 animate-fade-in-down h-[500px] md:h-[600px] lg:h-[700px]">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bannerData.map((banner, index) => (
                  <div
                    key={index}
                    className={`min-w-full h-full relative flex items-center ${banner.alignment}`}
                  >
                    {/* Background image */}
                    <img
                      src={banner.image}
                      alt={banner.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-right opacity-80 filter brightness-90 z-0 transform scale-105"
                    />
                    {/* Overlay gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} z-10`}
                    />

                    {/* Text content container */}
                    <div className={`relative z-20 p-8 md:p-16 max-w-xl ${banner.textColor} text-shadow-glow`}>
                      {/* Age Rating / Sub/Dub */}
                      <div className="flex items-center gap-2 mb-4 text-sm md:text-base font-semibold text-white/90 animate-fade-in-left delay-200">
                        <span className="bg-red-600 px-2 py-0.5 rounded-md text-xs font-bold shadow-md">
                          {banner.ageRating}
                        </span>
                        <span>{banner.audioSubtitle}</span>
                      </div>

                      {/* Main Title */}
                      <h2 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 font-['Impact'] ${banner.titleShadowClass} animate-slide-in-up uppercase tracking-tighter`}>
                        {banner.title}
                      </h2>

                      {/* Description */}
                      <p className="text-base md:text-lg mb-8 opacity-95 max-w-md animate-slide-in-up delay-400">
                        {banner.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex gap-4 animate-slide-in-up delay-600">
                        <button className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl flex items-center
                          hover:from-teal-700 hover:to-cyan-800 transform hover:scale-105 transition-all duration-300 button-glow-blue">
                          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                          START WATCHING E1
                        </button>
                        <button className="border-2 border-white/60 text-white/90 px-5 py-3 rounded-full text-lg font-bold shadow-md flex items-center
                          hover:bg-white/20 hover:text-white transform hover:scale-105 transition-all duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5zm0 2h10v6H5V6zm9 8H5v2h9a2 2 0 002-2v-2h-2z"></path></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-xl shadow-white/20 text-white z-30 slide-nav-button"
                aria-label="Previous Slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-xl shadow-white/20 text-white z-30 slide-nav-button"
                aria-label="Next Slide"
              >
                ›
              </button>

              {/* Indicators - Rectangular Style */}
              <div className="absolute bottom-8 left-8 flex gap-3 z-30">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-12 h-2 rounded-full transition-all duration-300 indicator-glow-blue ${
                      index === currentSlide
                        ? "bg-teal-500 scale-110 shadow-lg"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* Content Sections */}
            <section>
              <h2 className="text-4xl font-extrabold mb-8 text-white/90">
                Popular Series
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {contentData.popularSeries.map((item, index) => (
                  <ContentCard
                    key={index}
                    title={item.title}
                    type="Series"
                    image={item.image}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-extrabold mb-8 text-white/90">
                Recommended Movies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {contentData.movies.map((item, index) => (
                  <ContentCard
                    key={index}
                    title={item.title}
                    type="Movie"
                    image={item.image}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-extrabold mb-8 text-white/90">
                Variety Shows
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {contentData.variety.map((item, index) => (
                  <ContentCard
                    key={index}
                    title={item.title}
                    type="Variety"
                    image={item.image}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Channel Page */}
        {currentPage === "channel" && (
          <div className="space-y-16">
            <section className="relative overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/60 mb-10 animate-fade-in-down h-[300px]">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bannerData.map((banner, index) => (
                  <div
                    key={index}
                    className="min-w-full h-full relative flex items-center justify-center text-center"
                  >
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-90 transform scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-85`}
                    />
                    <div className="relative z-10 px-10 text-shadow-glow">
                      <h2 className={`text-4xl font-extrabold mb-2 ${banner.titleShadowClass} animate-slide-in-up`}>
                        {banner.title || "Explore Our Channels"}
                      </h2>
                      <p className="text-lg opacity-95 max-w-2xl mx-auto animate-slide-in-up delay-200">
                        {banner.description || "Dive into curated collections of your favorite anime and shows."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-xl shadow-white/20 text-white slide-nav-button"
                aria-label="Previous Slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-xl shadow-white/20 text-white slide-nav-button"
                aria-label="Next Slide"
              >
                ›
              </button>

              {/* Indicators */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white indicator-glow-blue
                      ${
                        index === currentSlide
                          ? "bg-teal-500 scale-125 shadow-md"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* Channel Content */}
            <section>
              <h2 className="text-4xl font-extrabold mb-8 text-white/90">
                Most Popular Anime
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...contentData.popularSeries, ...contentData.movies]
                  .slice(0, 8)
                  .map((item, index) => (
                    <ContentCard
                      key={index}
                      title={item.title}
                      type="Anime Series"
                      image={item.image}
                    />
                  ))}
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-extrabold mb-8 text-white/90">
                Newly Added Anime
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 40 }).map((_, i) => {
                  const combined = [
                    ...contentData.popularSeries,
                    ...contentData.movies,
                    ...contentData.variety,
                  ];
                  const item = combined[i % combined.length];
                  return (
                    <ContentCard
                      key={i}
                      title={item.title}
                      type="New Anime"
                      image={item.image}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeTV;