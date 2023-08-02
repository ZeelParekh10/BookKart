import {React} from "react";
import BookCard from "../../component/BookCard";

const data = [
  {
    key:1,
    title: "Book1",
    price: 1234,
    author: "Author 1",
  },
  {
    key:2,
    title: "Book2",
    price: 1111,
    author: "Author 2",
  },
  {
    key:3,
    title: "Book3",
    price: 2222,
    author: "Author 3",
  },
];

const Book = () => {
  return (
    <div>
      {data.map((e) => {
        return (
          <BookCard key={e.key} title={e.title} price={e.price} author={e.author} />
        );
      })}
    </div>
  );
};

export default Book;