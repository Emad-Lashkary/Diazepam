"use client";

import { useState } from "react";
import Recommendations from "../_components/Recommedations";
import RecommendationBox from "../_components/RecommendationBox";

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleNewRecommendation = (newRecommendation) => {
    setRecommendations((prevRecommendations) => [
      ...prevRecommendations,
      newRecommendation,
    ]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] pt-8 px-4 sm:px-10 animate-fadeIn mb-20">
      <RecommendationBox onNewRecommendation={handleNewRecommendation} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
};

export default Recommendation;
