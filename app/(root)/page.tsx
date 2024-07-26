import BookCard from "@/components/BookCard";
import { bookData } from "@/constants";

const HomePage = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <h1 className="text-20 font-bold text-white-1">Trending AudioBooks</h1>
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
