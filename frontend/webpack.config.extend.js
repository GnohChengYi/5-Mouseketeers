const linkingTarget = '';

// variables accessible in project src code
const env = ['CDN'];

const prodCdn = 'https://freefiremobile-a.akamaihd.net/common/web_event/cityopen/assets';
process.env.CDN = process.env.CDN || prodCdn;

module.exports = {
  linkingTarget,
  env,
};
