import resources from './resources'

const one = {
  reverse: true,
  inverse: true,
  id: 'upgrades',
  topLine: {
    text: 'Up-Grades',
  },
  headline: 'Tuning Your Car',
  description:
    'We have have thoroughly developed upgrades for many cars, the most popular is our ECU software recalibrations, which will completely transform your car. We also offer additional modifications to further enhance the performance and style of your vehicle.',
  buttonLabel: 'Find out more',
  imgStart: 'start',
  img: resources.img3,
  backgroundColor: 'white',
  // backgroundColor: 'linear-gradient(150deg,#c99fff -20%,#4a4eff)',
  start: 'true',
  to: '/upgrade',
  alt: 'img',
}

const two = {
  reverse: false,
  inverse: false,
  id: 'services',
  topLine: {
    text: 'Our Services',
  },
  headline: 'Maintain Your Love',
  description:
    'Our fully trained and highly experienced engineers can visit you anywhere, at your convenience, your car will be fully tested before and after tuning, with the latest genuine, professional tools.',
  buttonLabel: 'Find out more',
  imgStart: 'start',
  img: resources.engine,
  backgroundColor: 'black',
  start: 'true',
  to: '/service',
  alt: 'img',
}

const three = {
  reverse: true,
  inverse: true,
  id: 'allmakes',
  topLine: {
    text: 'All Makes',
  },
  headline: 'All Makes ',
  description:
    'We are able to upgrade the performance of cars from many manufacturers, such as Ferrari, Porsche, BMW, Audi, VW, Jeep, Ford, Toyota, Nissan and many more. Our service is available for most petrol and turbo diesel engines.',
  buttonLabel: 'Find out more',
  imgStart: 'start',
  img: resources.allmakes,
  backgroundColor: 'white',
  start: 'true',
  to: '/allmakes',
  alt: 'img',
}

export default [one, two, three]
