/*
 * image preloader
 */

const images = [
  // `${process.env.CDN}/background.jpg`,
];

images.forEach((image) => {
  new Image().src = image;
});
