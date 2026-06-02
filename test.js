const nav = [
    { link: "about" },
    { link: "work" },
    { link: "faq's" },
    { link: "contacts" }
]

function createNav(info) {
    info.forEach((item, i) => {
        const navSection = document.querySelector("nav");

        let navItem = document.createElement("a");
        navItem.innerHTML = item['link'];
        navItem.href = "#$item['link']";

        navSection.appendChild(navItem);

    });
}

createNav(nav)

const works = [
    {
        image: "imgs/friendly_main.png",
        title: "Friendly",
        year: "2025",
        category: ["UX/UI Design"]
    },
    {
        image: "imgs/mystic_main.png",
        title: "Mystic",
        year: "2025",
        category: ["UX/UI Design", "Web Design"]
    },
    {
        image: "imgs/mystic_main.png",
        title: "Mystic",
        year: "2025",
        category: ["UX/UI Design", "Web Design"]
    },
    {
        image: "imgs/mystic_main.png",
        title: "Mystic",
        year: "2025",
        category: ["UX/UI Design", "Web Design"]
    }
]

function createWork(info) {
    info.forEach((item, i) => {
        const workMain = document.querySelector("#work-main");

        let workCard = document.createElement("div");
        workCard.className = "work-card";

        /*let workImageSection = document.createElement("div");
        workImageSection.className = "work-image-section";*/
        let workImage = document.createElement("img");
        workImage.src = item['image'];
        workImage.className = "work-image";

        let workTitle = document.createElement("h3");
        workTitle.innerHTML = item['title'];
        workTitle.className = "work-title";

        let workYear = document.createElement("caption");
        workYear.innerHTML = item['year'];

        let workCategoryDiv = document.createElement("div");
        workCategoryDiv.className = "work-category-div";

        item['category'].forEach((itemCategory, i) => {
            let workCategory = document.createElement("caption");
            workCategory.innerHTML = itemCategory;
            workCategoryDiv.appendChild(workCategory);
        });

        //workImageSection.appendChild(workImage);
        workCard.appendChild(workImage);
        workCard.appendChild(workTitle);
        workCard.appendChild(workYear);
        workCard.appendChild(workCategoryDiv);

        workMain.appendChild(workCard);
    });
}

createWork(works);
