"use client";
import { useState, useEffect } from "react";

const SHEET_ID = "1E2axgJpSl1hN3uiSlAuauM1pwN68lkXyqrM5thOCADo";
const API_KEY = "AIzaSyA8VMcXMEHChlhoOBcmiMzMDmljM-B4doY";
const SHEET_RANGE = "Form Responses 1!B:D"; // Adjust the range based on your Google Sheet

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
    <div className="mt-8 px-2">
      <h2 className="text-2xl font-bold text-primary_100 mb-4">
        Visitor Recommendations
      </h2>
      {recommendations.length > 0 ? (
        <ul className="bg-primary_900 p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-8">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="mb-4">
              <p className="text-primary_100">Name: {recommendation[0]}</p>
              <p className="text-primary_100">Email: {recommendation[1]}</p>
              <p className="text-primary_100">
                Recommendation: {recommendation[2]}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-primary_300">
          No recommendations yet. Be the first to submit!
        </p>
      )}
    </div>
  );
};

export default Recommendations;
