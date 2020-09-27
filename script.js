const descriptionsContent = (() => {
  let _descriptions = [
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

  const removeDescription = function (index) {
    _descriptions = _descriptions.splice(index, 1)
  }

  const addDescription = (title, definition, location, author, url) => {
    _descriptions.push({ title, definition, location, author, url })
  }

  const getDescription = (index) => {
    return _descriptions[index]
  }

  return {
    getDescription,
    changeTitle,
    changeDefinition,
    changeLocation,
    changeAuthor,
    changeURL,
    removeDescription,
    addDescription
  }
})()

const displayDescriptions = (() => {
  const _description = {
    title: document.querySelector('#title'),
    definition: document.querySelector('#definition'),
    location: document.querySelector('#location'),
    author: document.querySelector('#author'),
    url: document.querySelector('#url')
  }

  const changeDescription = (obj) => {
    _description.url.href = obj.url
    for (const key in _description) {
      if (key === 'url') return
      _description[key].innerHTML = obj[key]
    }
  }

  return { changeDescription }
})()

const carouselController = (() => {
  let _currentPosition = 0

  const _carousel = document.querySelector('.carousel__images')

  const slidePrev = function () {
    // If we are on the 1st picture, there is no 'previous' picture to slide to.
    if (_currentPosition === 0) return

    _currentPosition += 100
    _carousel.style.transform = `translateX(${_currentPosition}%)`
  }

  const slideNext = function () {
    // If we are on the last picture, there is no 'next' picture to slide to.
    if (_currentPosition === -(_carousel.childElementCount - 1) * 100) return

    _currentPosition -= 100
    _carousel.style.transform = `translateX(${_currentPosition}%)`
  }

  const slideTo = function (index) {
    _currentPosition = -(index - 1) * 100
    _carousel.style.transform = `translateX(${_currentPosition}%)`
  }

  return {
    slidePrev,
    slideNext,
    slideTo
  }
})()

const carouselBtns = (() => {
  let _active = 1

  const _buttons = document.querySelectorAll('.slide-to')

  const _slidePrev = () => {
    const prev = document.querySelector('#prev')

    prev.addEventListener('click', carouselController.slidePrev)
    prev.addEventListener('click', () => _changeActive(_active - 1))
    prev.addEventListener('click', () => displayDescriptions.changeDescription(descriptionsContent.getDescription(_active - 1)))
  }

  const _slideNext = () => {
    const next = document.querySelector('#next')
    next.addEventListener('click', carouselController.slideNext)
    next.addEventListener('click', () => _changeActive(_active + 1))
    next.addEventListener('click', () => displayDescriptions.changeDescription(descriptionsContent.getDescription(_active - 1)))
  }

  const _slideTo = () => {
    _buttons.forEach((button) => button.addEventListener('click', (e) => carouselController.slideTo(e.target.dataset.image.slice(6))))
    _buttons.forEach((button) => button.addEventListener('click', (e) => _changeActive(e.target.dataset.image.slice(6))))
    _buttons.forEach((button) => button.addEventListener('click', (e) => displayDescriptions.changeDescription(descriptionsContent.getDescription(e.target.dataset.image.slice(6) - 1))))
  }

  const _changeActive = (index) => {
    if (index < 1 || index > _buttons.length) return

    _buttons[_active - 1].classList.remove('active')
    _active = index
    _buttons[_active - 1].classList.add('active')
  }

  const enableButtons = () => {
    _slidePrev()
    _slideNext()
    _slideTo()
  }

  return { enableButtons }
})()

carouselBtns.enableButtons()
