import React from "react";
import Hero from "../Hero";
import Analytics from "../Analytics";
import Newsletter from "../Newsletter";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
