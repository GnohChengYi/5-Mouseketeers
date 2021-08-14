const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const sizeOf = require('image-size');

const CLASS_PREFIX = 'img-';
const ASSETS_PATH = 'cdn/assets';
const OUTPUT_PATH = 'src/styles/assets.scss';

(async () => {
  const entries = await fg(`${ASSETS_PATH}/**/*`);

  const results = entries.map((entry) => {
    const dim = sizeOf(entry);
    const url = path.relative(ASSETS_PATH, entry);

    let className = url.replace(/\//g, '-');
    className = path.basename(className, `.${dim.type}`);
    className = `${CLASS_PREFIX}${className}`;

    const w = dim.width / 100;
    const h = dim.height / 100;

    return `.${className} {
  width: ${w}rem;
  height: ${h}rem;
  background: assetsUrl("${url}") center / ${w}rem no-repeat;
}
`;
  });

  const writer = fs.createWriteStream(OUTPUT_PATH);
  writer.end(results.join('\n'));
})();
