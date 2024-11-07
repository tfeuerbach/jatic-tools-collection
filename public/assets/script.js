function filterCards() {
    const filterValue = document.getElementById("filter").value;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cardFlag = card.getAttribute("data-flag");

        if (filterValue === "all" || cardFlag.includes(filterValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});