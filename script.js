
/* ===============================
   1. MOBILE NAVIGATION
================================ */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("active");

    menuBtn.textContent =
        navbar.classList.contains("active") ? "✕" : "☰";

});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function() {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
    });

});


/* ===============================
   2. LOCAL GRAPE FARM INFORMATION
================================ */

const farmData = {

    lomboy: {

        name: "Lomboy Farms",

        image: "images/images.png",

        description:
        "Lomboy Farms is a pioneering grape farm located in Barangay Urayong, Bauang, La Union. Founded by Avelino Lomboy in 1972, it played an important role in establishing grape cultivation in the Philippines.",

        activity:
        "Visitors can explore the vineyard, learn about grape farming, experience seasonal fruit picking, and discover grape-based products. The farm is also associated with Uvas Cafe, which features dishes incorporating grapes.",

        location:
        "📍 Barangay Urayong, Bauang, La Union"

    },

    gapuz: {

        name: "Gapuz Grapes Farm",

        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=900",

        description:
        "Gapuz Grapes Farm is a family-owned vineyard in Bauang, La Union. It is among the local farms that helped develop grape farming and farm tourism in the municipality.",

        activity:
        "The farm is known for seasonal pick-and-pay grape picking, vineyard visits, and activities that allow visitors to learn more about local grape production.",

        location:
        "📍 Bauang, La Union"

    },

    manguerra: {

        name: "Manguerra Grapes Farm",

        image: "images/mangue.png",

        description:
        "Manguerra Grapes Farm is one of the family-owned vineyards recognized in the grape-growing community of Bauang. It is part of the municipality's agricultural and farm-tourism heritage.",

        activity:
        "Grape farms in the area provide opportunities for visitors to appreciate vineyard agriculture and enjoy seasonal farm experiences. Contact the farm to confirm its current activities.",

        location:
        "📍 Bauang, La Union"

    }

};


/* SHOW FARM POPUP */

function showFarm(type) {

    const farm = farmData[type];

    if (!farm) return;

    document.getElementById("farmName").textContent = farm.name;

    document.getElementById("farmImage").src = farm.image;

    document.getElementById("farmDescription").textContent =
        farm.description;

    document.getElementById("farmActivity").textContent =
        farm.activity;

    document.getElementById("farmLocation").textContent =
        farm.location;

    document.getElementById("farmModal").classList.add("show");

    document.body.style.overflow = "hidden";

}


/* CLOSE FARM POPUP */

function closeFarm() {

    document.getElementById("farmModal").classList.remove("show");

    document.body.style.overflow = "";

}


/* ===============================
   3. GRAPE VARIETY INFORMATION
================================ */

const grapeData = {

    cardinal: {

        name: "Red Cardinal",

        description:
        "Red Cardinal is a red-skinned table grape variety. It is one of the grape varieties historically grown by farmers in Bauang.",

        characteristics:
        "• Red-colored skin\n• Juicy fruit\n• Grown for fresh consumption",

        uses:
        "• Fresh fruit\n• Fruit servings\n• Other grape-based products"

    },

    malaga: {

        name: "White Malaga",

        description:
        "White Malaga is a greenish-yellow grape variety. It was among the grape varieties reported in the early development of Gapuz Grapes Farm.",

        characteristics:
        "• Greenish-yellow skin\n• Sweet table-grape variety\n• Used for fresh fruit consumption",

        uses:
        "• Fresh fruit\n• Fruit displays\n• Grape-based food products"

    },

    ribier: {

        name: "Black Ribier",

        description:
        "Black Ribier is a dark-skinned table grape variety. It was also reported among the early varieties obtained by Gapuz Grapes Farm.",

        characteristics:
        "• Dark purple to nearly black skin\n• Juicy flesh\n• Table-grape variety",

        uses:
        "• Fresh fruit\n• Fruit servings\n• Grape-based products"

    }

};


/* SHOW GRAPE INFORMATION */

function showGrape(type) {

    const grape = grapeData[type];

    if (!grape) return;

    const modal = document.getElementById("farmModal");

    document.getElementById("farmImage").src =
        type === "cardinal"
        ? "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=900"
        : type === "malaga"
        ? "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=900"
        : "images/mangue.png"
    document.getElementById("farmName").textContent = grape.name;

    document.getElementById("farmDescription").textContent =
        grape.description;

    document.getElementById("farmActivity").textContent =
        grape.characteristics;

    document.getElementById("farmLocation").textContent =
        "Common uses: " + grape.uses;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* CLOSE WHEN CLICKING OUTSIDE */

document.getElementById("farmModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeFarm();
    }

});


/* CLOSE WITH ESCAPE KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeFarm();
    }

});


/* ===============================
   4. BAUANG GRAPE FACT GENERATOR
================================ */

const grapeFacts = [

    "Bauang is home to Lomboy Farms, a pioneering vineyard established in 1972.",

    "Barangay Urayong is one of the well-known areas for grape farms in Bauang.",

    "Avelino Lomboy is recognized for helping establish grape cultivation in the Philippines.",

    "Grape picking is one of the farm tourism activities offered in Bauang.",

    "Other family-owned vineyards followed the pioneering grape farm in Bauang.",

    "Some local farms also offer products made from locally grown fruits.",

    "Grape farming helps promote agriculture and tourism in Bauang.",

    "Grapes grow in clusters on plants called grapevines."

];

function newFact() {

    const randomIndex = Math.floor(Math.random() * grapeFacts.length);

    document.getElementById("factText").textContent =
        grapeFacts[randomIndex];

}


/* ===============================
   5. WELCOME MESSAGE
================================ */

console.log("Welcome to Bauang Grapes! 🍇");
console.log("Discover the agricultural heritage of Bauang, La Union.");

