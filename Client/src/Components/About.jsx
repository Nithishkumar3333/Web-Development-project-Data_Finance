import React from "react";
import man from "../Assets/man.png";
import about from "../Assets/abou-us.webp";

function About() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img className="w-40 " src={man} alt="" />
      <h1 className="text-[#00df9a] font-bold mt-5">
        Hey, We're Semi colon Solution
      </h1>

      <h1 className="text-[white] text-4xl flex flex-col items-center justify-center mt-5">
        We work with our clients to make thier vision true with our
        <span className="text-[#00df9a]">
          {" "}
          inovative development and marketing services
        </span>
      </h1>

      <div className="max-w-[1240px] max-auto grid md:grid-cols-2">
        <img className="mr-[700px] mt-20" src={about} alt="" />
        <p className="text-1xl text-[white] mt-20 ">
          We’re team of creative minds that work hard to achive our client’s
          goal. We have been offering our innovative technical solutions to
          businesses of all sizes since 2019 that help our clients streamline
          their operations and increase their profitability. At Semicolon
          Solutions, we believe in the power of technology to transform
          businesses. That’s why we offer a wide range of services that leverage
          the latest technologies, such as artificial intelligence, machine
          learning, and data analytics. Our services include software
          development, web design and development, mobile app development, cloud
          computing, cybersecurity, and IT consulting. In our professional
          carrier, we have been working with various companies and clients from
          Australia, the USA, the UK, AU Europe, and Canada, just to name a few.
          Have any idea in your mind, just talk to us. We’ll help you to make it
          real.
        </p>
      </div>
    </div>
  );
}

export default About;
