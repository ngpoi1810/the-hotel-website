import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";

export default async function CabinList({ filter }) {
  const cabins = await getCabins();

  if (!cabins.length) return null;
  let filterCabins;
  if (filter === "all") filterCabins = cabins;
  if (filter === "small")
    filterCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    filterCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    filterCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filterCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
