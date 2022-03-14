const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
  );
}

export {
  isMobile,
  isInViewport
}
