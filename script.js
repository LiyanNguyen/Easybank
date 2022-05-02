let mobileMenuToggle = document.querySelector("#mobileMenuToggle");
let mobileMenu = document.querySelector("#mobileMenu");
let isMenuOpen = false;

mobileMenuToggle.onclick = () => {
	isMenuOpen = !isMenuOpen;

	if (isMenuOpen == true) {
		mobileMenu.style.display = "block";
		mobileMenuToggle.src = "images/icon-close.svg";
	}

	else if (isMenuOpen == false) {
		mobileMenu.style.display = "none";
		mobileMenuToggle.src = "images/icon-hamburger.svg";
	}
};