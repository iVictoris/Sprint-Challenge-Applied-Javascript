/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// this should be from where the js file is so path is technically ../../assets/carousel

// createContainer referenced in ../Cards/index.js

const createImages = () => {
  const baseUrl = './assets/carousel/'
  const fileNames = ['mountains.jpeg', 'computer.jpeg', 'trees.jpeg', 'turntable.jpeg']
  
  const images = fileNames.map(filename => createElementWithData('src', 'img', baseUrl.concat(filename)));
  
  return images
}

const showImage = (index) => {
  const carouselContainer =  document.querySelector('.carousel-container')
  console.log(carouselContainer)
  const images = carouselContainer.querySelectorAll('img');
  images.forEach(element => element.style.display = 'none');
  images[index].style.display = 'initial'
  
}

const createCarousel = () => {

  const images = createImages();

  const carousel = createContainer('carousel');
  const leftButton = createElementWithData('textContent', 'div', '<')
  updateElementWithData(leftButton, 'className', 'left-button');
  const rightButton = createElementWithData('textContent', 'div', '>')
  updateElementWithData(rightButton, 'className', 'right-button');

  const carouselIndex = Math.floor(Math.random() * images.length);


  carousel.appendChild(leftButton)
  images.forEach(img => carousel.appendChild(img))
  carousel.appendChild(rightButton)
  return [carousel, carouselIndex]
}

const stretchScript = () => {
  const [carousel, carouselIndex] = createCarousel()

  const carouselContainer = document.querySelector('.carousel-container')
  carouselContainer.appendChild(carousel);

  showImage(carouselIndex);
}

stretchScript();