function isElementInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  console.log(`Bounding top: ${bounding.top}, Bounding bottom: ${bounding.bottom}`);
  console.log(window.innerHeight);
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function bottomOfElementInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  console.log(bounding.bottom < 0);
  return !(bounding.bottom < 0);
}

export { isElementInViewport, bottomOfElementInViewport };