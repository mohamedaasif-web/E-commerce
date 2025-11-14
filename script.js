// Mobile Menu
let sideNavbar = document.querySelector(".side-navbar");
let openMenu = document.querySelector("#menuToggle");
let closeMenu = document.querySelector("#closeSide");

openMenu.addEventListener("click", () => {
    sideNavbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    sideNavbar.classList.remove("active");
});

document.addEventListener("click", (e) => {
    if (!sideNavbar.contains(e.target) && !openMenu.contains(e.target)) {
        sideNavbar.classList.remove("active");
    }
});

// Product Search
function filterProducts() {
    let searchText = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product-box");

    products.forEach(product => {
        let name = product.dataset.name.toLowerCase();

        if (name.includes(searchText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
