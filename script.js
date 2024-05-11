document.addEventListener("DOMContentLoaded", function () {
	const filterInput = document.getElementById("project-filter");

	filterInput.addEventListener("keyup", function () {
		const filterValue = filterInput.value.toLowerCase();
		const projects = document.querySelectorAll(".project");

		projects.forEach((project) => {
			const technology = project
				.querySelector("p")
				.textContent.toLowerCase();
			if (technology.includes(filterValue)) {
				project.style.display = "block"; // Shows the project if it matches
			} else {
				project.style.display = "none"; // Hides the project if it doesn't match
			}
		});
	});
});
