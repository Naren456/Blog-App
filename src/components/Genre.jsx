import React from 'react'
import { useState,useEffect } from 'react';
const Genre = () => {
      const [Genre,setGenre] = useState([]);
      const API_KEY = 'a52f7654d212491c82e635495ba2129a';
    
      useEffect(() => {
        const fetchTrending = async () => {
          try {
            const res = await fetch(
              `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-added&page_size=45`
            );
            const data = await res.json();
            setGenre(data.results || []);
          } catch (err) {
            console.error("Error fetching trending games:", err);
          }
        };
    
        fetchTrending();
      }, []);

  return (
    <div>
      
    </div>
  )
}

export default Genre
