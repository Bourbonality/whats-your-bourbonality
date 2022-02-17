const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
    );
}

export default isInViewport