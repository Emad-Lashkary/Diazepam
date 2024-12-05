import React from "react";
import RecommendationBox from "../_components/RecommendationBox";
import Recommendations from "../_components/Recommedations";

function FeedbackPage() {
  return (
    <div className="container mx-auto p-4">
      <RecommendationBox />
      <Recommendations />
    </div>
  );
}

export default FeedbackPage;
