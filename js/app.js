const burgerButton = document.querySelector(".btn");
const headerMenu = document.querySelector(".header-navbar");
const headerMenuLinks = document.querySelectorAll(".header-navbar a");
const arrowsSlider = document.querySelector(".arrows-container .container");

function showArrowsSlider() {
	window.innerWidth >= 992
		? (arrowsSlider.style.display = "flex")
		: (arrowsSlider.style.display = "none");
}

function removeVisibility() {
	headerMenuLinks.forEach((link) => {
		link.classList.remove("visibility-hidden");
	});
}

function linksVisibility() {
	if (window.innerWidth < 768) {
		headerMenuLinks.forEach((link) => {
			link.classList.add("visibility-hidden");
		});
		burgerButton.addEventListener("click", () => {
			if (headerMenu.classList.contains("open")) {
				headerMenuLinks.forEach((link) => {
					// Cache les liens du menu une fois l'animation de transition effectuée.
					setTimeout(() => {
						link.classList.remove("visibility-hidden");
					}, 500);
				});
			} else {
				removeVisibility();
			}
		});
	} else {
		removeVisibility();
	}
}

burgerButton.addEventListener("click", () => {
	headerMenu.classList.toggle("open");
	burgerButton.classList.toggle("toggle");
});

window.addEventListener("resize", () => {
	showArrowsSlider();
	linksVisibility();
	if (window.innerWidth >= 768 && headerMenu.classList.contains("open")) {
		headerMenu.classList.remove("open");
		burgerButton.classList.remove("toggle");
	}
});

showArrowsSlider();
linksVisibility();
