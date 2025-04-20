import React, { useEffect, useState } from "react";
import TrendingGames from "../components/Trending";
import Genre from "../components/Genre";
import { Banner } from "../components/Banner";
const Home = () => {


  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-900 min-h-screen text-white mt-16">
         <Banner />
     <TrendingGames />
     <Genre />
    </div>
  );
};

export default Home;
