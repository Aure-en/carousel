const descriptionsModule = (() => {
  const _descriptions = [
    {
      title: 'Mountain',
      definition: 'A raised part of the earth\'s surface, much larger than a hill, the top of which might be covered in snow.',
      location: 'Lake Louise, Canada',
      author: 'Daniel Roe',
      url: 'https://unsplash.com/photos/lpjb_UMOyx8'
    },

    {
      title: 'Forest',
      definition: 'A large area of land covered with trees and plants, usually larger than a wood, or the trees and plants themselves.',
      location: 'Plitvice Lakes, Croatia',
      author: 'Peter Jan Rijpkema',
      url: 'https://unsplash.com/photos/wI6o8OwUwdw'
    },

    {
      title: 'Seashore',
      definition: 'An area of sand or small stones near the sea or another area of water such as a lake.',
      location: 'North Shore, Waialua, United States',
      author: 'Sean O.',
      url: 'https://unsplash.com/photos/KMn4VEeEPR8'
    },

    {
      title: 'Flowers',
      definition: 'The part of a plant that is often brightly coloured and has a pleasant smell, or the type of plant that produces these.',
      location: 'Diamond Valley Lake, United States',
      author: 'Sergey Shmidt',
      url: 'https://unsplash.com/photos/koy6FlCCy5s'
    },

    {
      title: 'City',
      definition: 'An inhabited place of greater size, population, or importance than a town or village.',
      location: 'Tokyo, Japan',
      author: 'Pawel Nolbert',
      url: 'https://unsplash.com/photos/4u2U8EO9OzY'
    }

  ]

  const changeTitle = (obj, title) => {
    obj.title = title
  }

  const changeDefinition = (obj, definition) => {
    obj.definition = definition
  }

  const changeLocation = (obj, location) => {
    obj.location = location
  }

  const changeAuthor = (obj, author) => {
    obj.author = author
  }

  const changeURL = (obj, url) => {
    obj.url = url
  }

  const removeDescription = (index) => {
    this.descriptions = descriptions.splice(index, 1)
  }

  const addDescription = (title, definition, location, author, url) => {
    _descriptions.push({ title, definition, location, author, url })
  }

  return {
    changeTitle,
    changeDefinition,
    changeLocation,
    changeAuthor,
    changeURL,
    removeDescription,
    addDescription
  }
})()

const displayDescriptionsModule = () => {

}

const carouselController = (() => {

  let currentPosition = 0;

  const carousel = document.querySelector('.carousel__images');

  const slideNext = function () {
    this.currentPosition -= 100;
    carousel.style.transform = `translateX(${this.currentPosition}%)`;
  }

  const slidePrev = function () {
    this.currentPosition += 100;
    carousel.style.transform = `translateX(${this.currentPosition}%)`;
  }

  return {
    currentPosition,
    slidePrev,
    slideNext
  }
})();
