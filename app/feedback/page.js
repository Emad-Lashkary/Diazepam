import Recommendation from "./Recommendation";

export const metadata = {
  title: "Feedback | Diazepam",
};

const ParentComponent = () => {
  return (
    <div className="min-h-screen bg-primary_900/80 text-primary_100 flex flex-col">
      <p className="max-w-2xl self-center pt-7 px-7 text-lg">
        I value your insights and welcome your recommendations. Your feedback is
        important to Diazepam and helps to improve. Whether you have ideas,
        suggestions, or just want to share your thoughts, feel free to let me
        know. I appreciate your input!
      </p>
      <Recommendation />
    </div>
  );
};

export default ParentComponent;
