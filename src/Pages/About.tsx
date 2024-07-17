import React from "react";
import character from "@/assets/character.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6">
        <img
          src={character}
          alt="placeholder"
          className="w-3/4 h-auto object-cover rounded-lg max-w-full"
        />
      </div>
      <div className="col-span-5 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="mb-4 text-lg">
          I am an enthusiastic, self-motivated, reliable, responsible, and
          hard-working person. Dynamic Software Engineer with a passion for
          innovation and expertise in software development and machine
          learning. Experienced in end-to-end project development, adept at
          leveraging diverse programming languages and frameworks to drive
          impactful solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
