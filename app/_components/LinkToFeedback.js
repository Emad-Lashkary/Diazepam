import Link from "next/link";

function LinkToFeedback() {
  return (
    <div className="flex sm:flex-row flex-col sm:gap-2 gap-6 justify-center items-center px-10 pb-10">
      <span className="sm:tracking-widest tracking-wide text-lg border-b-2 border-secondaryBase p-2 text-center hover:px-4 transition-all">
        Share your idea or recommendation about list:
      </span>
      <Link
        className="bg-secondaryBase text-primary_100 py-3 px-6 rounded-full hover:bg-secondaryBase/60 transition duration-300"
        href="/feedback"
      >
        Feedback
      </Link>
    </div>
  );
}

export default LinkToFeedback;
