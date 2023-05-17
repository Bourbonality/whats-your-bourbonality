const isMobile =
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);

const isInViewport = (element) => {
	const rect = element.getBoundingClientRect();
	return (
		rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
	);
};

const interpolate = (template, ...params) => {
	for (let i = 0; i < params.length; i++) {
		const regex = new RegExp(`\\{${i}\\}`, 'gi');
		template = template.replace(regex, () => params[i]);
	}
	return template;
};

const capitalizeFirstLetter = str => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

export { isMobile, isInViewport, interpolate, capitalizeFirstLetter };
