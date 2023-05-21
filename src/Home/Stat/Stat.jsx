import React from "react";

const Stat = () => {
  return (
    <div className="text-center mb-10">
        <h1 className="font-semibold font-serif text-3xl mb-6">Our Today month's sells and reviews</h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat bg-slate-900 text-white">
          <div className="stat-title text-white">Sells</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Likes</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Reviews</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
