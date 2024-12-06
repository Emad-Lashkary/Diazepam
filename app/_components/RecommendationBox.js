import { useState } from "react";
import Spinner from "./Spinner";

const RecommendationBox = ({ onNewRecommendation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    recommendation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Form action URL
    const googleFormActionURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScYN3XPnXqFrHJJB0nZZOl27Yk0noCkpAUy0uWYsCw1g0yhLw/formResponse";

    // Create a new FormData object and append the form data
    const form = new FormData();
    form.append("entry.1338380630", formData.name);
    form.append("entry.563501330", formData.email);
    form.append("entry.1583647868", formData.recommendation);

    try {
      await fetch(googleFormActionURL, {
        method: "POST",
        body: form,
        mode: "no-cors",
      });
      onNewRecommendation({
        name: formData.name,
        email: formData.email,
        recommendation: formData.recommendation,
      });
    } catch (error) {
      console.error("Error submitting the form", error);
    } finally {
      setIsSubmitting(false);
    }

    setFormData({ name: "", email: "", recommendation: "" });
  };

  return (
    <div className="bg-primary_900 p-6 flex flex-col rounded-lg shadow-md w-full max-w-md mx-auto animate-slideLeft max-h-min py-8">
      <h2 className="md:text-2xl text-xl font-bold text-primary_100 mb-4 self-center">
        Add Your Recommendations
      </h2>
      {isSubmitting ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label className="block text-primary_300" htmlFor="name">
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
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary_300" htmlFor="email">
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
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary_300" htmlFor="recommendation">
              Recommendation
            </label>
            <textarea
              className="w-full p-3 bg-primary_800 text-primary_100 rounded-md"
              id="recommendation"
              name="recommendation"
              value={formData.recommendation}
              onChange={handleChange}
              placeholder="Your Recommendations"
              rows="3"
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondaryBase text-primary_100 py-3 px-6 rounded-full hover:bg-secondaryLight transition duration-300"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default RecommendationBox;
