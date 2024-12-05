"use client";
import { useState } from "react";

const RecommendationBox = ({ onNewRecommendation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    recommendation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecommendation = {
      name: formData.name,
      email: formData.email,
      recommendation: formData.recommendation,
    };

    // Optimistically update the UI
    onNewRecommendation(newRecommendation);

    // Google Form action URL
    const googleFormActionURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScYN3XPnXqFrHJJB0nZZOl27Yk0noCkpAUy0uWYsCw1g0yhLw/formResponse";

    // Create a new FormData object and append the form data
    const form = new FormData();
    form.append("entry.123456789", formData.name); // Replace with actual field ID for name
    form.append("entry.234567890", formData.email); // Replace with actual field ID for email
    form.append("entry.345678901", formData.recommendation); // Replace with actual field ID for recommendation

    try {
      await fetch(googleFormActionURL, {
        method: "POST",
        body: form,
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Error submitting the form", error);
      // If there was an error, revert the optimistic update
      onNewRecommendation(null);
    }

    setFormData({ name: "", email: "", recommendation: "" });
  };

  return (
    <div className="bg-primary_900 p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-primary_100 mb-4">
        Send Us Your Recommendations
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-primary_300 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 bg-primary_800 text-primary_100 rounded-md"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary_300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 bg-primary_800 text-primary_100 rounded-md"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-primary_300 mb-2"
            htmlFor="recommendation"
          >
            Recommendation
          </label>
          <textarea
            className="w-full p-3 bg-primary_800 text-primary_100 rounded-md"
            id="recommendation"
            name="recommendation"
            value={formData.recommendation}
            onChange={handleChange}
            placeholder="Your Recommendations"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-secondaryBase text-primary_100 py-3 px-6 rounded-full hover:bg-secondaryLight transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecommendationBox;
