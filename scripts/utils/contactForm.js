function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const body = document.getElementById("body");
	modal.style.display = "block";
	main.style.filter = "blur(3px)";
	body.style.overflow = "hidden";
	main.style.pointerEvents = "none";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const body = document.getElementById("body");
    modal.style.display = "none";
	main.style.filter = "blur(0px)";
	body.style.overflow = "auto";
	main.style.pointerEvents = "auto";
}

