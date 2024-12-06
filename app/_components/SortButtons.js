"use client";
import React from "react";

const SortButtons = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="flex justify-end w-full px-4 mt-4">
      <select
        className="py-2 px-4 rounded-lg bg-primary_700 text-primary_100 mx-auto focus:bg-primary_800 transition-all"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="newFirst">New First</option>
        <option value="oldFirst">Old First</option>
      </select>
    </div>
  );
};

export default SortButtons;
