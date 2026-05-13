import React from "react";
import Image from "../assets/Image.png";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";
import Image7 from "../assets/Image7.png";
import Image8 from "../assets/Image8.png";
import Image9 from "../assets/Image9.png";
import Image10 from "../assets/Image10.png";
import Image11 from "../assets/Image11.png";
import Image12 from "../assets/Image12.png";
import Image13 from "../assets/Image13.png";
import Image14 from "../assets/Image14.png";

const ProjectPage = () => {
  // အစ်ကို့ရဲ့ ပရောဂျက် စာရင်းပါ
  const myProjects = [
    {
      id: 1,
      title: "Client Project",
      desc: "For client's sister's friend",
      img: Image,
    },
    {
      id: 2,
      title: "Node.js Logic",
      desc: "Async and Backend",
      img: Image1,
    },
    {
      id: 3,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image2,
    },
    {
      id: 4,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image3,
    },
    {
      id: 5,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image4,
    },
    {
      id: 6,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image5,
    },
    {
      id: 7,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image6,
    },
    {
      id: 8,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image7,
    },
    {
      id: 9,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image8,
    },
    {
      id: 10,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image9,
    },
    {
      id: 11,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image10,
    },
    {
      id: 12,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",

      img: Image11,
    },
    {
      id: 13,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",

      img: Image12,
    },
    {
      id: 14,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image13,
    },
    {
      id: 15,
      title: "React Renewal",
      desc: "Modern UI with Tailwind",
      img: Image14,
    },
  ];

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-pink-500 mb-10 border-l-4 border-pink-500 pl-4"></h1>

      {/* Grid Layout Start */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-center">
  {myProjects.map((item, index) => (
    <div
      key={item.id}
      className={`group relative overflow-hidden rounded-lg border border transition-all
        ${index % 3 === 1 ? "md:-translate-y-8" : "md:translate-y-8"}`} 
    >
      <img
        src={item.img}
        alt={item.title}
        className="block aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-5">
        <h3 className="text-pink-400 font-bold text-xl">{item.title}</h3>
        <p className="text-zinc-600 text-sm mt-2 font-medium">{item.desc}</p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default ProjectPage;
