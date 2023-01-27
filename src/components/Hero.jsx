import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With VACATIONs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quisquam rerum quas! Similique doloremque repellendus iste quia,
            quos, odit temporibus labore autem quisquam consectetur qui
            accusantium laborum omnis est culpa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
