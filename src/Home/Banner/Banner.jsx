import React from "react";

const Banner = () => {
  return (
    <div className="md:flex items-center justify-center gap-5 mb-20 md:mb-52 border bg-slate-300 p-12 rounded">
      <div
       data-aos="flip-right"
       className="w-3/4 md:w-2/4 p-5 shadow-md bg-slate-50 rounded-md mx-auto mb-8 md:mb-0 md:my-auto">
        <h2 className="text-center mb-5 text-4xl font-bold">
          Anime Action Figures
        </h2>
        <p className="text-lg font-light text-stone-950 w-2/3 mx-auto font-serif">
          Welcome to our action figures website, where imagination comes to
          life! Explore a captivating collection of action figures that will
          transport you to a world of adventure and excitement. With meticulous
          attention to detail, our figures are intricately crafted to resemble
          your favorite heroes and villains from movies, comics, and video
          games. Whether you're a fan of superheroes, sci-fi warriors, or iconic
          characters from pop culture, we've got something for everyone. Each
          figure is poseable and equipped with accessories that enhance their
          authenticity, allowing you to recreate epic battles and iconic scenes.
          Discover a universe of possibilities and let your imagination soar
          with our premium action figures. Start your collection today and
          unleash the hero within!
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/kcqwWsf/gojo-banner.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
