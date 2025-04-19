import React, { useEffect, useState } from "react";
import TrendingGames from "../components/Trending";
import Genre from "../components/Genre";
import { Banner } from "../components/Banner";
const Home = () => {


  return (
    <div className="min-h-screen bg-gray-900 p-4">
         <Banner />
     <TrendingGames />
     <Genre />
    </div>
  );
};

export default Home;
