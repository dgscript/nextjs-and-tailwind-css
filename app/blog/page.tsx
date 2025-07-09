"use client";
import { useEffect, useState } from "react";

export default function Blog() {
  type BlogPost = { day: string; content: string };
  const [blogposts, setBlogposts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function blogData() {
      const response = await fetch("/data.json");
      const data = await response.json();
      setBlogposts(data);
    }
    blogData();
  }, []);

  useEffect(() => {
    console.log(blogposts);
    setLoading(true);
  }, [blogposts]);

  return (
    <main>
      <h2
        className={`text-2xl p-5 max-sm:text-[1.2rem] ${
          loading ? "" : "hidden"
        }`}
      >
        Welcome to the "Blog" part of this project. Well, it's not a blog but
        this is where I'll maybe write down all the things that I'm currently
        learning in this project.
      </h2>

      <img
        src="loading.gif"
        alt="Did you guys see that"
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4rem] h-[4rem] ${
          loading ? "hidden" : ""
        }`}
      />

      {blogposts.map((item: BlogPost) => (
        <div
          key={item.day}
          className={`bg-white rounded-2xl p-5 shadow-lg mb-4 ${
            loading ? "" : "hidden"
          }`}
        >
          <p className="text-2xl border-b-2 pb-3 border-gray-300 font-semibold max-sm:text-[1.2rem]">
            Day {item.day}
          </p>
          <p className="text-[1.2rem] pt-3 text-justify max-sm:text-[1rem]">
            {item.content}
          </p>
        </div>
      ))}
    </main>
  );
}
