const category = [
    { category: "UX/UI Design" }
]

function createCategory(info) {
    info.forEach((item, i) => {
        const categorySection = document.querySelector("#category-section");

        let categoryDiv = document.createElement("div");
        let categoryIcon = document.createElement("img");
        categoryIcon.src = "imgs/star.svg";
        categoryIcon.className = "category-icon";
        let categoryItem = document.createElement("p");
        categoryItem.innerHTML = item['category'];

        categoryDiv.appendChild(categoryIcon);
        categoryDiv.appendChild(categoryItem);
        categorySection.appendChild(categoryDiv);
    });
}

createCategory(category);



const project = [
    {
        category: "Problem",
        text: "Even though we live in a digital world that allows us to connect to anyone wherever they are at any second, people have been feeling more isolated than ever. Lots of factors contribute to this increasing feeling and the death of third spaces is one of them"
    },
    {
        category: "Solution",
        text: "I proposed Friendly, an app that promotes community and connection, encouraging users to transit from the digital to the “real world” while sharing activities and spaces that fit each person interests"
    },
    {
        category: "Research",
        text: "To better understand the needs and frustrations of the users, I created a questionnaire to which I obtained 18 responses that served as reference when designing the product. Most participants want to be informed about events based on their likes and suggestions of questions or topics as conversation starters. Furthermore, participants also seem interested in filtering people based on interests, age, gender and location by this specific order. Participants also prefer having to confirm identity, either by citizenship card or photo."
    },
    {
        category: "Personas",
        text: "Even though we live in a digital world that allows us to connect to anyone wherever they are at any second, people have been feeling more isolated than ever. Lots of factors contribute to this increasing feeling and the death of third spaces is one of them"
    }
]

function createProject(info) {
    info.forEach((item, i) => {
        const projectSection = document.querySelector("#project-section");

        let projectDiv = document.createElement("div");
        let projecCategory = document.createElement("h4");
        projecCategory.innerHTML = item['category'];
        let projectText = document.createElement("p");
        projectText.innerHTML = item['text'];

        projectDiv.appendChild(projecCategory);
        projectDiv.appendChild(projectText);
        projectSection.appendChild(projectDiv);
    });
}

createProject(project);