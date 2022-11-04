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

export { isMobile, isInViewport, interpolate };
