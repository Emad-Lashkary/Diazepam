"use client";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const SHEET_ID = "1E2axgJpSl1hN3uiSlAuauM1pwN68lkXyqrM5thOCADo";
const API_KEY = "AIzaSyA8VMcXMEHChlhoOBcmiMzMDmljM-B4doY";
const SHEET_RANGE = "Form Responses 1!A:D"; // Adjust the range based on your Google Sheet

const fetchRecommendations = async () => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}?key=${API_KEY}`
    );
    console.log("Response Status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Response Text:", errorText);
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data.values || []; // Ensure it returns an array
  } catch (error) {
    console.error("Failed to fetch recommendations:", error);
    return [];
  }
};

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function loadRecommendations() {
      const data = await fetchRecommendations();
      setRecommendations(data);
    }
    loadRecommendations();
  }, []);

  return (
    <div className="bg-primary_900 rounded-lg pt-8 mt-10 md:mt-0 px-2 w-[90%] md:w-full flex flex-col items-center">
      <h2 className="md:text-2xl text-xl font-bold text-primary_100 pb-1 px-4 border-b">
        Visitor Recommendations
      </h2>
      {recommendations.length > 0 ? (
        <ul className=" p-6 rounded-lg shadow-md w-full mx-auto mt-8 md:max-h-96 md:overflow-y-scroll">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="mb-6 w-full">
              <p className="text-secondaryLighter text-sm">
                {recommendation[1]}
              </p>
              <p className="text-primary_200/70 text-xs">{recommendation[2]}</p>
              <p className="text-primary_100 text-base">{recommendation[3]}</p>
              <p className="text-primary_100 text-[0.6rem] font-thin tracking-wider">
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
