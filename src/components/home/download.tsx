import React from "react";
import { Github } from "../shared/icons";

export default function Download() {
  return (
    <div
      className="mx-auto mt-6 flex animate-fade-up flex-wrap items-center justify-center gap-5 opacity-0"
      style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
    >
      <a
        className="group flex max-w-fit cursor-pointer items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
        rel="noopener noreferrer"
        href="https://github.com/alexfedy/Hedgehog-App"
        target="_blank"
      >
        <Github />
        <p>View Code</p>
      </a>
    </div>
  );
}
