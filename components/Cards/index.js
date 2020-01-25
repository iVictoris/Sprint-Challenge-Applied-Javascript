// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const getArticles = async () => {
  return await axios.get("https://lambda-times-backend.herokuapp.com/articles");
};

const createElementWithData = (propertyName, elementType, data) => {
  const element = document.createElement(elementType);
  element[propertyName] = data;

  return element;
};

const updateElementWithData = (element, propertyName, data) => {
  element[propertyName] = data;
};

const createContainer = className => {
  const element = document.createElement("div");
  updateElementWithData(element, "className", className);
  return element;
};

const createCard = ({ headline, authorPhoto, authorName }) => {
  const cardContainer = createContainer("card");

  const headlineDiv = createElementWithData("textContent", "div", headline);
  updateElementWithData(headlineDiv, "className", "headline");

  const authorContainer = createContainer("author");

  const imgContainer = createContainer("img-container");
  const img = createElementWithData("src", "img", authorPhoto);

  const authorSpan = createElementWithData("textContent", "span", authorName);

  //appends here
  cardContainer.appendChild(headlineDiv);

  cardContainer.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorContainer.appendChild(authorSpan);

  return cardContainer;
};

const articles = getArticles().then(data => {
  /*
   * articles structure: object
    - js
    - bootstrap
    - tech
    - jq 
    -node

    article itself: 
   * headline, authorPhoto, authorName
   */

  const {
    data: { articles }
  } = data;
  const cardsContainer = document.querySelector(".cards-container");

  Object.entries(articles).map(([subject, articles]) =>
    articles.forEach(article => cardsContainer.appendChild(createCard(article)))
  );
});
