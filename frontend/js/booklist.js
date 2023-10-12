function Booklist() {
  const me = {};

  me.showMessage = function (message) {
    const messagesDiv = document.querySelector("#messages");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">
    <div>${message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    messagesDiv.append(wrapper);
  };

  me.reloadPrompts = async function () {
    const res = await fetch("/search");
    if (!res.ok) {
      me.showMessage("Error loading prompts");
      return;
    }
    const prompts = await res.json();
    me.renderPrompt(prompts);
  };

  me.renderPrompt = function (prompts) {
    const promptDiv = document.querySelector("#prompts");
    promptDiv.innerHTML = prompts.map(renderPrompt).join("\n");
  };

  return me;
}

const renderPrompt = function (prompt) {
  return `<div>
    <label>Prompt ID: ${prompt.id}</label>
    <label>Prompt Rating: ${prompt.rating}</label>
    </div>`;
};

const booklist = Booklist();
booklist.reloadPrompts();

/*function Booklist() {
  const me = {};

  me.showMessage = function (message) {
    const messagesDiv = document.querySelector("#messages");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">
    <div>${message}</div>
    <button type=" button" class="btn-close" data-bs-dismiss="alert" aria-lable="Close"></button>
    </div>`;

    messagesDiv.append(wrapper);
  };

  me.reloadPrompts = async function () {
    const res = await fetch("/search");
    if (!res.ok) {
      me.showMessage("Error loading prompts");
      return;
    }
    const prompts = await res.json();
    //.then(() => {
    me.renderPrompt(prompts);
    // });
  };

  const renderPrompts = function (prompt) {
    return `<div>
    <label>Prompt:${prompt.id} </label>
    <label>Prompt:${prompt.rating} </label>

    </div>`;
  };

  me.renderPrompt = function (prompts) {
    const promptDiv = document.querySelector("#prompts");
    promptDiv.innerHTML = prompts.map(renderPrompt).join("\n");
  };
  return me;
}
const booklist = Booklist();
booklist.reloadPrompts();
*/
/*

function MainModule(bookID = "#book-section") {
  const me = {};

  const listingsElement = document.querySelector(bookID);

  function getListingCode(listing) {
    const amenities = Array.isArray(listing.genres)
      ? listing.genres
      : JSON.parse(listing.genres);

    const genresHTML = genres
      .map((genre) => `<label>${genre}</label>`)
      .join("");

    return `<div class="col-4">
        <div class="listing card">
          <img
            src=${listing.image}
            class="card-img-top"
            alt="bookList"
          />
          <div class="card-body">
            <h2 class="card-title">${listing.name}</h2>
            <div class="price">${listing.price}</div>
            <p class="card-text">${listing.description}</p>
            <p class="card-text amenities-title">Amenities</p>
            <div class="card-text amenities">${genresHTML}</div>
            <div class="card-text host-info">
              <img class="hos" src=${listing.image} alt=${listing.image} />
              <span class="language">${listing.language}</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  function redraw(listings) {
    listingsElement.innerHTML = "";
    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("http://localhost:3000/books").get("isbn");;
    const listings = await res.json();

    me.redraw(listings.slice(0, 50));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();

main.loadData();
*/
