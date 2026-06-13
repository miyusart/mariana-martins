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
        navItem.href = "#" + item['link'];

        navSection.appendChild(navItem);

    });
}

console.log("LOL XD");

createNav(nav);

const about = [
    {
        position: "UX/UI Designer @ hes-inovação",
        year: "2025-Present",
        tasks: ["Conducted UX research and applied it into user flows and information diagrams",
            "Conducted usability tests and user interviews with blind, low vision and deaf users",
            "Developed low and high fidelity wireframes and prototypes",
            "Designed apps (android and iOS), responsive websites (institutional and e-commerce) and backoffices",
            "Focused on usability and accessibility, applying WCAG Guidelines",
            "Created and maintained design systems",
            "Developed brand guidelines, visual identities, marketing strategies and social media posts",
            "Worked with agile methodologies closely with the development team and the stakeholders",
            "Integrated AI into my workflows"
        ]
    },
    {
        position: "Web Designer @ doppel",
        year: "2022",
        tasks: ["Developed an institutional website using HTML, CSS, JavaScript and PHP",
            "Designed and prototyped using Adobe XD",
            "Worked on social media posts"
        ]
    },
    {
        position: "Freelance Illustrator",
        year: "2018-Present",
        tasks: ["Developed personalized illustrations",
            "Sold both online and in conventions"
        ]
    },
    {
        position: "Master's in Illustration and Animation @ Politechnique Institute of Cávado and Ave",
        year: "2022-2025",
        tasks: ["Was class representative and part of the Pedagogical Council, solving class matters and defending my colleagues’ interests",
            "Wrote a thesis called “Queerness in animation: Intersectional Approach for Representing Diversity in Character Design”",
            "Presented an article called “Rainbow Cartoons: Analysis of Queer Representation in Animated TV Shows” and publish one called “Animating Equality: The Contribute of Animation in Queer Acceptance”",
            "Worked on a videoclip for B Fachada’s “Mudar de Método” which was nominated for “Best Student Movie” at Festa Mundial da Animação ‘25",
            "Developed a 2D animated short called “Companhia”",
            "Studied illustration, 2D and 3D animation, creative writing and video editing"
        ]
    },
    {
        position: "Bachelor's in Design and Multimedia @ University of Coimbra",
        year: "2018-2022",
        tasks: ["Developed an institutional website using HTML, CSS, JavaScrript and PHP",
            "Designed and prototyped using Adobe XD",
            "Worked on social media posts"
        ]
    },
    {
        position: "Training in UX/UI Design @ IEFP",
        year: "2025",
        tasks: ["Studied information architecture, web and interaction design, ",
            "Conducted user research and usability testing",
            "Designed and prototyped websites and mobile apps"
        ]
    },
    {
        position: "UX/UI Courses @ UXCEL",
        year: "2022-2025",
        tasks: ["Took courses on accessibility, information architecture, ux research and writing, wireframing and prototyping"
        ]
    }

]


function createAbout(info) {
    info.forEach((item, i) => {
        const AboutExperienceSection = document.querySelector("#about-experience-section");
        const AboutEducationSection = document.querySelector("#about-education-section");

        let aboutDetails = document.createElement("details");

        let aboutSummary = document.createElement("summary")
        aboutSummary.className = "about-title";

        let aboutTitle = document.createElement("p");
        aboutTitle.innerHTML = item['position'];
        let aboutYear = document.createElement("caption");
        aboutYear.innerHTML = item['year'];
        let aboutIcon = document.createElement("img");
        aboutIcon.src = "imgs/chevron.svg";


        aboutSummary.appendChild(aboutTitle);
        aboutSummary.appendChild(aboutYear);
        aboutSummary.appendChild(aboutIcon);

        let aboutTasksSection = document.createElement("div");
        aboutTasksSection.className = "tasks-section";

        item['tasks'].forEach((itemTasks, i) => {
            let aboutTasks = document.createElement("p");
            aboutTasks.innerHTML = itemTasks;

            let taskIcon = document.createElement("img");
            taskIcon.src = "imgs/star.svg";

            let taskDiv = document.createElement("div");


            taskDiv.appendChild(taskIcon);
            taskDiv.appendChild(aboutTasks);
            aboutTasksSection.appendChild(taskDiv);
        });

        aboutDetails.appendChild(aboutTasksSection);
        aboutDetails.appendChild(aboutSummary);

        if (i < 3) {
            AboutExperienceSection.appendChild(aboutDetails);
        } else {
            AboutEducationSection.appendChild(aboutDetails);
        }


        aboutDetails.addEventListener("toggle", function () {
            if (aboutDetails.open) {
                aboutIcon.style.transform = 'rotate(180deg)';
            } else {
                aboutIcon.style.transform = 'rotate(0deg)';
            }
        });
    });


}

createAbout(about);


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
        title: "CCDM",
        year: "2019",
        category: ["Visual Identity", "Graphic Design", "Web Design", "Programming", "Front End Development"]
    },
    {
        image: "imgs/mystic_main.png",
        title: "Garagem Clássica",
        year: "2025",
        category: ["UX/UI Design", "Web Design"]
    },
    {
        image: "imgs/mystic_main.png",
        title: "Design System Template",
        year: "2026",
        category: ["UX/UI Design", "Web Design"]
    }
]

function createWork(info) {
    info.forEach((item, i) => {
        const workMain = document.querySelector("#work-main");

        let workCard = document.createElement("a");
        workCard.href = item['title'] + ".html";
        workCard.className = "work-card";

        /*let workImageSection = document.createElement("div");
        workImageSection.className = "work-image-section";*/
        let workImage = document.createElement("img");
        workImage.src = item['image'];
        workImage.className = "work-image";

        let workTitleSection = document.createElement("div");
        workTitleSection.className = "work-title-section";

        let workTitle = document.createElement("h4");
        workTitle.innerHTML = item['title'];
        workTitle.className = "work-title";

        let workYear = document.createElement("caption");
        workYear.innerHTML = item['year'];

        let workCategoryDiv = document.createElement("div");
        workCategoryDiv.className = "work-category-div";

        item['category'].forEach((itemCategory, i) => {
            let workIcon = document.createElement("img");
            workIcon.src = "imgs/star.svg";
            let workCategory = document.createElement("caption");
            workCategory.innerHTML = itemCategory;
            workCategoryDiv.appendChild(workIcon);
            workCategoryDiv.appendChild(workCategory);
        });

        //workImageSection.appendChild(workImage);
        workCard.appendChild(workImage);
        workCard.appendChild(workTitleSection);
        workTitleSection.appendChild(workTitle);
        workTitleSection.appendChild(workYear);
        workCard.appendChild(workCategoryDiv);

        workMain.appendChild(workCard);
    });
}

createWork(works);


const faqs = [
    {
        question: "questão 1",
        answer: "resposta 1",
    },
    {
        question: "questão 2",
        answer: "resposta 2",
    },
    {
        question: "questão 3",
        answer: "resposta 3",
    }
]

function createFaqs(info) {
    info.forEach((item, i) => {
        const FaqsMain = document.querySelector("#faqs-main");

        let FaqQuestion = document.createElement("summary");
        let FaqAnswer = document.createElement("p");
    });
}

createFaqs(faqs);


/*const creditsP = document.querySelector("#footer-credits p");
if (creditsP.hover) {
    const creditsImage = document.querySelector("#footer-credits img");
    creditsImage.style.display = 'none';
}*/
