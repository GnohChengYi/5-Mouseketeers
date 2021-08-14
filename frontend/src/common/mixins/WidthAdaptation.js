function isWideScreen() {
  const ratio = parseFloat(
    document.documentElement.getAttribute('data-width-to-height-ratio'),
  );
  return ratio > 1.9;
}

export default {
  name: 'WidthAdaptation',
  data() {
    return {
      widescreen: isWideScreen(),
    };
  },
};
