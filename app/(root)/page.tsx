"use client"

import BookCard from "@/components/BookCard";
import { bookData } from "@/constants";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const HomePage = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex flex-col gap-9">
      <h1 className="text-20 font-bold text-white-1">Trending AudioBooks</h1>
      <div className="flex gap-10">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      </div>
      <section className="book_grid">
        {bookData.map(({ id, title, imgURL, description }) => (
          <BookCard
            key={id}
            title={title}
            description={description}
            imgUrl={imgURL}
            audiobookId={id}
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
