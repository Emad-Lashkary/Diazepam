"use client";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import SortButtons from "./SortButtons"; // Import the SortButtons component

const SHEET_ID = "1E2axgJpSl1hN3uiSlAuauM1pwN68lkXyqrM5thOCADo";
const API_KEY = "AIzaSyA8VMcXMEHChlhoOBcmiMzMDmljM-B4doY";
const SHEET_RANGE = "Form Responses 1!A:D"; // Adjust the range based on your Google Sheet

const fetchRecommendations = async () => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}?key=${API_KEY}`
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Response Text:", errorText);
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.values || []; // Ensure it returns an array
  } catch (error) {
    console.error("Failed to fetch recommendations:", error);
    return [];
  }
};

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [sortOrder, setSortOrder] = useState("newFirst");

  useEffect(() => {
    async function loadRecommendations() {
      const data = await fetchRecommendations();
      setRecommendations(data);
    }
    loadRecommendations();
  }, []);

  const sortedRecommendations = recommendations.slice().sort((a, b) => {
    if (sortOrder === "newFirst") {
      return new Date(b[0]) - new Date(a[0]); // Sort by new first
    } else {
      return new Date(a[0]) - new Date(b[0]); // Sort by old first
    }
  });

  return (
    <div className="bg-primary_900 rounded-lg pt-8 my-10 md:mb-0 md:mt-0 px-2 w-[90%] md:w-full flex flex-col items-center mx-auto">
      <h2 className="md:text-2xl text-xl font-bold text-primary_100 pb-1 px-4 border-b">
        Visitor Recommendations
      </h2>
      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
      {sortedRecommendations.length > 0 ? (
        <ul className="p-6 rounded-lg shadow-md w-full mx-auto mt-8 max-h-96 overflow-y-scroll">
          {sortedRecommendations.map((recommendation, index) => (
            <li key={index} className="mb-6 w-full">
              <p className="text-secondaryLighter text-sm">
                {recommendation[1]}
              </p>
              <p className="text-primary_200/60 text-xs">{recommendation[2]}</p>
              <p className="text-primary_100 text-base overflow-x-hidden pb-2">
                {recommendation[3].split(" ").slice(0, 100).join(" ")}
              </p>
              <p className="text-primary_100/80 text-[0.6rem] font-thin tracking-widest border-b border-primary_200/30 pb-1 mx-3">
                {recommendation[0]}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Recommendations;
