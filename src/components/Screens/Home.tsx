import React from "react";
import { Hero } from "../Fragments/HomeFragments/Hero";
import { FeaturesSection } from "../Fragments/HomeFragments/Featured";
import featuredData from "../data/featuredData";

function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturesSection {...featuredData} />
    </>
  );
}

export default Home;
