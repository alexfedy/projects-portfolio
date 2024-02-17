"use client";
import Image from "next/image";
import { useState } from "react";

type ProjectProps = {
  image: string;
  name: string;
  description: string;
  link: string;
  technologies: string[];
};

const IMG_SIZE = 50;

export default function Project({
  image,
  name,
  description,
  link,
  technologies,
}: ProjectProps) {
  const [showRedirect, setShowRedirect] = useState(false);
  return (
    <a
      className="cursor-pointer"
      href={link}
      target="_blank"
      onMouseEnter={() => setShowRedirect(true)}
      onMouseLeave={() => setShowRedirect(false)}
    >
      {" "}
      <div className="relative w-full rounded-2xl bg-white shadow-sm p-8 hover:shadow-md duration-300 flex gap-8 flex-col md:flex-row">
        <Image src={image} width={IMG_SIZE} height={IMG_SIZE} alt={name} />
        <div>
          <div>
            <span className="font-semibold text-lg">{name}</span>
            <span className="text-lg font-bold mx-2">&#183;</span>
            <span className="text-base text-slate-600">{description}</span>
          </div>
          <div className="flex flex-wrap gap-2 my-2">
            {technologies.map((t) => (
              <span
                key={t}
                className="bg-slate-100 px-2 text-xs rounded-full text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`${
            showRedirect ? "icon icon-visible" : "icon"
          } absolute top-5 -translate-y-1/2 right-5 text-slate-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20"
            height="20"
          >
            <path d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
