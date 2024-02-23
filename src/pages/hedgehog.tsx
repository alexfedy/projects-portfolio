import Card from "@/components/home/card";
import Image from "next/image";
import React from "react";
import Download from "@/components/home/download";

const Home = () => {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div>
          {/* <a
          target="_blank"
          style={{ cursor: "pointer" }}
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#96A6AB] px-7 py-2 transition-colors hover:bg-[#A69590] "
        >
          <p className="text-center text-sm font-semibold text-white">
            Introducing Hedgehog
          </p>
        </a> */}
          <div className="mb-5 flex items-center justify-center">
            <img src="./hh.png" height={120} width={120} />
          </div>

          <h1
            className="animate-fade-up bg-gradient-to-br from-black to-[#A69590] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Lightweight todo list.
            <br />
            Nothing extra.
          </h1>
          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Simple task tracker built in Go.
          </p>
          <Download />
        </div>
      </div>

      <div className="z-10 my-20 flex w-full max-w-xl items-center justify-center px-5 xl:px-0">
        <Image
          className="rounded-lg shadow-xl"
          src="/hh.gif"
          alt="Hedgehog Demo"
          width={500}
          height={500}
        />
      </div>

      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
          />
        ))}
      </div>
    </>
  );
};

const features = [
  {
    title: "Distraction-free Management",
    description: "All you need to track your tasks and nothing else.",
    demo: (
      <Image
        className="rounded-lg"
        src="./hh_list.png"
        alt="Deploy with Vercel"
        width={250}
        height={250}
        unoptimized
      />
    ),
  },
  {
    title: "Cross-Platform",
    description:
      "The application uses [Wails](https://wails.io/) which allows the app to run on Windows, Mac, and Linux.",
    demo: (
      <Image
        className="rounded-lg"
        src="./wails.png"
        alt="Wails Logo"
        width={250}
        height={250}
        unoptimized
      />
    ),
  },
  {
    title: "Golang + Web Technologies",
    description:
      "Hedgehog is a collection of techologies, including Golang, React, and Vite.",
    demo: (
      <div className="flex flex-wrap items-center justify-center gap-5">
        <img
          width={80}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        />
        <img
          width={80}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />
        <img
          width={80}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        />
      </div>
    ),
  },
];

export default Home;
