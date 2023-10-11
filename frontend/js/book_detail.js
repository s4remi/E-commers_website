const loadBook = (bookData) => {
  document.title = bookData.title;
  document.getElementById("book-details-container").innerHTML = `<div>
<h1 id="title">${bookData.title}</h1>
<img src="${
    bookData.image
  }" alt="Book Cover" className="book-image" id="bookImage">
</div><div class="details-container">
  <p><strong>Author:</strong> <span id="author">${bookData.author}</span></p>
  <p><strong>Rating:</strong> <span id="rating">${
    bookData.rating["$numberDouble"]
  }</span></p>
  
  <p><strong>Language:</strong> <span id="language">${
    bookData.language
  }</span></p>
  <p><strong>Genres:</strong> <span id="genres">${JSON.parse(
    bookData.genres.replace(/'/g, '" '),
  )}</span></p>
  <p><strong>Pages:</strong> <span id="pages">${
    bookData.pages["$numberInt"]
  }</span></p>
  <p><strong>Publisher:</strong> <span id="publisher">${
    bookData.publisher
  }</span></p>
  <p><strong>Price:</strong> $<span id="price">${
    bookData.price["$numberDouble"]
  }</span></p><p><strong>Description:</strong> <span id="description">${
    bookData.description
  }</span></p></div>`;
};

document.addEventListener("DOMContentLoaded", () => {
  const isbn = new URLSearchParams(window.location.search).get("isbn");
  fetch(`/books?isbn=${isbn}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) =>
      response.json().then((data) => {
        loadBook(data);
      }),
    )
    .catch(() => {
      loadBook({
        _id: { $oid: "6524ca5afcc33679b93fe009" },
        title: "The Hunger Games",
        author: "Suzanne Collins",
        rating: { $numberDouble: "4.33" },
        description:
          "WINNING MEANS FAME AND FORTUNE.LOSING MEANS CERTAIN DEATH.THE HUNGER GAMES HAVE BEGUN. . . .In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and once girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead beforeâ€”and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.",
        language: "English",
        ISBN: { $numberDouble: "9780439023481.0" },
        genres:
          "['Young Adult', 'Fiction', 'Dystopia', 'Fantasy', 'Science Fiction', 'Romance', 'Adventure', 'Teen', 'Post Apocalyptic', 'Action']",
        bookForm: "Hardcover",
        pages: { $numberInt: "374" },
        publisher: "Scholastic Press",
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg",
        price: { $numberDouble: "5.09" },
      });
      /*      document.querySelector(".book-details-container").innerHTML =
        "Something wrong with showing the book, please try again later";*/
    });
});
