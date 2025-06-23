const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const book = getBook(2);
console.log(book);

// Destructuring Object - Write same as properties name
const { title, author, genres, hasMovieAdaptation, pages } = book;
console.log(title, author);

// Destructuring Arrays - order matters
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Rest/Spread Operator
const bookGenres = [...genres, "epic fantasy", "sword and sorcery"];
console.log(bookGenres);

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Updating an existing property with a new value (overwrites the old value) 
  pages: 1000,
};
console.log(updatedBook);

// Template Literals
const summaryString = `The book "${title}" by ${author} is a ${primaryGenre} novel with ${pages} pages.`;
console.log(summaryString);

// Ternary Operator instead of if/else
hasMovieAdaptation ? console.log("Book has a movie adaptation") : console.log("Book does not have a movie adaptation");

// Short-Circuiting And Logical Operators: &&, ||, ??
console.log(true && "Some String");
console.log(false && "Some String");

console.log("truthy value" && "Some String");
console.log(0 && "Some String");

console.log(true || "Some String");
console.log(false || "Some String");

const countReviewsData = book.reviews.librarything.reviewsCount;
console.log(countReviewsData);

// Nullish Coalescing Operator
const countReviews = book.reviews.librarything.reviewsCount;
console.log(countReviews ?? "No Data");

function getTotalBookReviews(book) {
  const goodreadsReviews = book.reviews?.goodreads?.reviewsCount ?? 0;
  goodreadsReviews;

  const librarythingReviews = book.reviews?.librarything?.reviewsCount ?? 0;
  librarythingReviews;

  return goodreadsReviews + librarythingReviews;
}

const totalReviews = getTotalBookReviews(book);
totalReviews;
*/

// Array Methods

// Map Method
function getTotalBookReviews(book) {
  const goodreadsReviews = book.reviews?.goodreads?.reviewsCount ?? 0;
  goodreadsReviews;

  const librarythingReviews = book.reviews?.librarything?.reviewsCount ?? 0;
  librarythingReviews;

  return goodreadsReviews + librarythingReviews;
}

const books = getBooks();
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  totalReviews: getTotalBookReviews(book),
}));

console.log(essentialData);

// Filter Method
const longBooksWithMovieAdaptation = books.filter((book) => book.pages > 500).map((book) => book.title)
console.log(longBooksWithMovieAdaptation);

// Reduce Method
const allBooksPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log(allBooksPages);

// Sort Method
const sortedBooks = books.sort((a, b) => b.pages - a.pages);
console.log(sortedBooks);

// 1. Add a new book to the data array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  publicationDate: "1998-07-02",
  author: "J. K. Rowling",
}

const afterAddingBook = [...data, newBook];
console.log(afterAddingBook);

// 2. Delete a book from the data array
const afterOneBookDelete = afterAddingBook.filter((book) => book.id !== 3);
console.log(afterOneBookDelete);

// 3. Update a book in the data array
const booksAfterUpdate = afterOneBookDelete.map((book) => book.id === 1 ? { ...book, pages: 1300 } : book);
console.log(booksAfterUpdate);