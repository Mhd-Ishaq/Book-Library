import Book from "./components/Book";
import { data } from "./data";

const App = () => {
  return (
    <section className="bookstore">
      <div className="bookstore-title">
      <h1>My Book Store</h1>
      </div>
      <div className="books">
        {data.map((book) => {
          return <Book key = {book.id} book ={book}/>
        }
        )};
      </div>
    </section>
  );
};

export default App;

