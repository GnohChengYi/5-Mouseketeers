import path from 'path';

function getParam(paramName, url) {
  const href = url || window.location.href;
  const name = paramName.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function camelizeStr(str) {
  return str.replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
}

function snakifyStr(str) {
  return str.replace(/(?:^|\.?)([A-Z])/g, (_, x) => `_${x.toLowerCase()}`);
}

function convertCase(convertFunc) {
  function converter(thing) {
    if (thing instanceof Array) {
      return thing.map((i) => converter(i));
    }
    if (thing instanceof Object) {
      const newObj = {};
      Object.keys(thing).forEach((k) => {
        newObj[convertFunc(k)] = converter(thing[k]);
      });
      return newObj;
    }
    return thing;
  }
  return converter;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function transformImage(image, effect) {
  if (!image) return '';
  if (!effect) return image;
  const folder = image.substr(0, image.lastIndexOf('/'));
  const filename = path.basename(image);

  return `${folder}/${filename.substr(
    0,
    filename.lastIndexOf('.'),
  )}-${effect}.png`;
}

export default {
  getParam,
  camelizeStr,
  snakifyStr,
  delay,
  camelizeKeys: convertCase(camelizeStr),
  snakifyKeys: convertCase(snakifyStr),
  transformImage,
};
