"use client";
import React, { useState } from "react";
import RecommendationBox from "../_components/RecommendationBox";
import Recommendations from "../_components/Recommedations";
const ParentComponent = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleNewRecommendation = (newRecommendation) => {
    setRecommendations((prevRecommendations) => [
      ...prevRecommendations,
      newRecommendation,
    ]);
  };

  return (
    <div className="min-h-screen bg-primary_900/80 text-primary_100 flex flex-col">
      <p className="max-w-2xl self-center pt-7 px-7 text-lg">
        I value your insights and welcome your recommendations. Your feedback is
        important to Diazepam and helps to improve. Whether you have ideas,
        suggestions, or just want to share your thoughts, feel free to let me
        know. I appreciate your input!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] pt-8 px-4 sm:px-10 animate-fadeIn">
        <RecommendationBox onNewRecommendation={handleNewRecommendation} />
        <Recommendations recommendations={recommendations} />
      </div>
    </div>
  );
};

export default ParentComponent;
