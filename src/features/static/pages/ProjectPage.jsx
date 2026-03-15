import React from "react";
import Image from "../../../assets/Image.png";
import Image1 from "../../../assets/Image1.png";

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
      img: "project3.jpg",
    },
  ];

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-pink-500 mb-10 border-l-4 border-pink-500 pl-4">
        hello
      </h1>

      {/* Grid Layout Start */}
      <div className="flex flex-col space-y-12 max-w-4xl mx-auto">
        {myProjects.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-pink-500/20 bg-pink transition-all hover:border-pink-500"
          >
            <img
              src={item.img}
              alt={item.title}
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-5">
              <h3 className="text-pink-400 font-bold text-xl">{item.title}</h3>
              <p className="text-zinc-400 text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
