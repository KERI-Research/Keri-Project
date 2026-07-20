const revealElements = document.querySelectorAll(".reveal");
const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-pill").forEach((link) => {
	if (link.getAttribute("href") === currentPath) {
		link.classList.add("current");
		link.setAttribute("aria-current", "page");
	}
});

if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(
						"is-visible",
					);
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 },
	);

	revealElements.forEach((element) => observer.observe(element));
} else {
	revealElements.forEach((element) =>
		element.classList.add("is-visible"),
	);
}
