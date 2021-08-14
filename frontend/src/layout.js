export default () => {
  const docEl = document.documentElement;

  // set size for root element
  function resetRoot() {
    docEl.style.fontSize = '100px';
    docEl.style.height = `${window.height}px`;
    docEl.style.width = `${window.width}px`;
  }

  resetRoot();
  window.addEventListener('orientationchange', resetRoot);
  window.addEventListener('resize', resetRoot);
};
