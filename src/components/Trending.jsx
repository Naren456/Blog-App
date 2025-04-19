import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

const TrendingGames = () => {
  const [trendingGames, setTrendingGames] = useState([]);
  const API_KEY = 'a52f7654d212491c82e635495ba2129a';

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-added&page_size=45`
        );
        const data = await res.json();
        setTrendingGames(data.results || []);
      } catch (err) {
        console.error("Error fetching trending games:", err);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Trending Games</h2>
      <div className="overflow-x-auto no-wrap px-4 py-2 scrollbar-hide">
  <div className="flex gap-4 snap-x snap-mandatory scroll-smooth ">
    {trendingGames.slice(20,).map((game) => (
      <div key={game.id} className="snap-start shrink-0 w-[250px]">
        <GameCard game={game} />
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default TrendingGames;
