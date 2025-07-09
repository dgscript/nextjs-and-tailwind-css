"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [nextdropdown, setNextdropdown] = useState(false);
  const [tailwinddropdown, setTailwinddropdown] = useState(false);

  return (
    <main>
      <p className="text-2xl text-center my-4 max-sm:text-[1.2rem]">
        This is just a simple project that I'm making to learn{" "}
        <span className="font-bold">Next.js</span> and{" "}
        <span className="font-bold">Tailwind CSS</span>!
      </p>

      <Image
        src="/hero.png"
        alt="Next.js and Tailwind CSS"
        width={600}
        height={100}
        className="w-full py-3"
      />

      <div
        className={`shadow-lg p-7 text-justify text-[1.2rem] rounded-md bg-white mb-3 max-sm:p-5`}
      >
        <div
          className={`flex justify-between items-center font-semibold text-[1.5rem] hover:cursor-pointer`}
          onClick={() => {
            setNextdropdown(!nextdropdown);
          }}
        >
          <p className="max-sm:text-[1rem]">What is Next.js?</p>
          <p className="text-[#1EC3D1] text-[2rem]">+</p>
        </div>
        <div className={nextdropdown ? "" : "hidden"}>
          <p className="pt-5 max-sm:text-[1rem]">
            Next.js is a really powerful tool used to make great websites. You
            can visit their official docs{" "}
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              className="text-[#1EC3D1] underline"
            >
              here
            </a>
            .
          </p>

          <br />

          <p className="max-sm:text-[1rem]">
            It's a framework based on React, so for you to better understand
            Next.js you first have to learn React, which is a great tool for
            frontend development aswell! Next.js enables features like
            server-side rendering, static site generation, and API routes,
            making it easier to build fast and scalable web applications. It
            also provides built-in routing and optimizations out of the box.
          </p>
        </div>
      </div>

      <div
        className={`shadow-lg p-7 text-justify text-[1.2rem] rounded-md bg-white max-sm:p-5`}
      >
        <div
          className={`flex justify-between items-center font-semibold text-[1.5rem] hover:cursor-pointer`}
          onClick={() => {
            setTailwinddropdown(!tailwinddropdown);
          }}
        >
          <p className="max-sm:text-[1rem]">What is Tailwind CSS?</p>
          <p className="text-[#1EC3D1] text-[2rem]">+</p>
        </div>
        <div className={tailwinddropdown ? "" : "hidden"}>
          <p className="pt-5 max-sm:text-[1rem]">
            Tailwind CSS is a CSS tool that uses pre written classes to ease
            your life while making a website. So there's no need to actually
            write CSS! Visit their official docs{" "}
            <a
              href="https://tailwindcss.com/docs/installation/using-vite"
              target="_blank"
              className="text-[#1EC3D1] underline"
            >
              here
            </a>
            .
          </p>

          <br />

          <p className="max-sm:text-[1rem]">
            It can save a ton of your time! This whole project is made using
            Tailwind CSS. Tailwind CSS is a utility-first CSS framework that
            lets you style your web pages by composing small, reusable utility
            classes directly in your HTML or JSX. Instead of writing custom CSS,
            you use these classes to quickly build modern, responsive designs.
            This approach helps keep your codebase clean and makes it easy to
            maintain consistent styling across your project.
          </p>
        </div>
      </div>
    </main>
  );
}
