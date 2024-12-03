import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import { aoty, telegram } from "./_lib/vars";

export const metadata = {
  title: "Diazepam",
};

export default function Home() {
  return (
    <div className="w-full h-[100%] justify-center items-center p-5 sm:px-12 flex flex-col">
      <h2 className="sm:text-3xl text-xl pt-10 text-primary_100 sm:tracking-widest tracking-wide text-center">
        Welcome to my Personal Metal website -Diazepam-
      </h2>
      <div className="p-10 mt-[20%] sm:mt-0 sm:grid sm:grid-cols-[3fr_2fr] w-full h-full">
        <div className="flex justify-center mb-14">
          <p className="sm:w-[50%] w-[80%] text-center font-thin tracking-wide text-base">
            Additional top lists will be added to this website by the end of
            December 2024. Plus, expect more features and enhancements to come!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href={telegram}
            className="flex flex-row gap-2 items-center bg-primary_300/50 text-primary_900 sm:text-lg text-sm font-medium px-5 py-3 h-full rounded-md hover:bg-primary_300/60 transition-all"
          >
            <FaArrowRight />
            Telegram channel:{" "}
            <span className="underline underline-offset-4 px-1">@emdpills</span>
          </a>
          <Link
            href="/top100"
            className="flex flex-row gap-2 items-center bg-secondaryDarker/80 text-secondaryLighter sm:text-lg text-sm font-medium px-5 py-3 h-full rounded-md hover:bg-secondaryDarker transition-all"
          >
            <FaArrowRight />
            My 2024 Top 100 album rank
          </Link>
          <div className="flex flex-row gap-2 items-center bg-primary_300/50 text-primary_900 sm:text-lg text-sm font-medium px-5 py-3 h-full rounded-md hover:bg-primary_300/60 transition-all">
            <FaArrowRight />
            My All time fav albums
          </div>
          <a
            href={aoty}
            className="flex flex-row gap-2 items-center bg-primary_300/50 text-primary_900 sm:text-lg text-sm font-medium px-5 py-3 h-full rounded-md hover:bg-primary_300/60 transition-all"
          >
            <FaArrowRight />
            My AOTY page
          </a>
        </div>
      </div>
    </div>
  );
}
