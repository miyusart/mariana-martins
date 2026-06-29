const nav = [
    { link: "about" },
    { link: "work" },
    { link: "faq's" },
    { link: "contacts" }
]

function createNav(info) {
    info.forEach((item, i) => {
        const navSection = document.querySelector("nav");

        let navItem = document.createElement("div");
        let navA = document.createElement("a");
        navA.innerHTML = item['link'];
        navA.href = "#" + item['link'];
        let navIcon = document.createElement("img");
        navIcon.src = "imgs/star-white.svg";

        navItem.appendChild(navIcon);
        navItem.appendChild(navA);
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
            "Integrated AI into my workflow"
        ]
    },
    {
        position: "Web Designer Intern @ doppel",
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
        position: "Master's in Illustration and Animation @ Polytechnic  Institute of Cávado and Ave",
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
        tasks: ["Took courses on accessibility, information architecture, UX research and writing, wireframing and prototyping"
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
            taskIcon.src = "imgs/star-white.svg";

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

        if (i == 0) {
            aboutDetails.open = true;
        }

        aboutIcon.style.transitionDuration = '0.3s';

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
        image: "imgs/ccdm_main.png",
        title: "CCDM",
        year: "2019",
        category: ["Visual Identity", "Graphic Design", "Web Design", "Programming", "Front End Development"]
    },
    {
        image: "imgs/garagem_main.png",
        title: "Garagem Clássica",
        year: "2025",
        category: ["UX/UI Design", "Web Design"]
    },
    {
        image: "imgs/ds_main.png",
        title: "Design System Template",
        year: "2026",
        category: ["UX/UI Design", "Web Design"]
    }
]

function createWork(info) {
    info.forEach((item, i) => {
        const workMain = document.querySelector("#work-main");

        let workCard = document.createElement("a");
        workCard.href = item['title'.toLowerCase()] + ".html";
        workCard.className = "work-card";

        let workImageSection = document.createElement("div");
        workImageSection.className = "work-image-section";
        let workImage = document.createElement("img");
        workImage.src = item['image'];
        workImage.className = "work-image";
        let workImageIcon = document.createElement("img");
        workImageIcon.src = "imgs/star.svg";
        workImageIcon.className = "work-icon";

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

        workImageSection.appendChild(workImage); 
        workImageSection.appendChild(workImageIcon);
        workCard.appendChild(workImageSection);
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
        question: "What softwares do you use?",
        answer: "Academically, I mainly used the <b>Adobe programs</b>, specially Illustrator, Photoshop, Indesign, After Effects and Premier. However, since pivoting to UX/UI, my main tool has been <b>Figma</b>, since it is the industry standard and due to its versatility (Figjam, Design, Slides), allowing it to be used during different steps of the UX process. For organization also use ClickUp and Notion, and Miro for brainstorming",
    },
    {
        question: "What was your most challenging project?",
        answer: "Ironically, my most challenging project was also my first one - an <b>app heavily reliant on accessibility</b>, since its target audience are blind, low vision and deaf people. Knowing only the theory about accessibility, at that point, it was vital to conduct a lot of research on how specially blind and low vision people use smartphones in order to have a functional and useful product. Something that really contributed to the success of this project were the usability tests conducted, in which we gathered relevant feedback, from the actual target audience, that allowed us to create a more inclusive app",
    },
    {
        question: "What motivates you?",
        answer: "<b>I love creating</b>! My hobbies include creating, either by drawing, crocheting, cooking or baking. So, naturally, I love what I do for work - <b>creating solutions for a specific problem</b>. It keeps me curious, experimental and imaginative",
    },
    {
        question: "What are you hoping to learn?",
        answer: "The intent is always to become better at what I do, that being UX/UI or design as a whole, of course! I'd really love to learn more about acessibility as well so I can create products for more and more people. Besides that, I've been tackling code lately (by creating this website), but I've still got so much more to learn, so, whenever I find the opportunity I'd like to learn React and Creative Coding to create better and more interesting websites",
    }
]

function createFaqs(info) {
    info.forEach((item, i) => {
        const faqMain = document.querySelector("#faqs-main");

        let faqDetails = document.createElement("details");
        faqDetails.name = "faqDetails";

        let faqSummary = document.createElement("summary");
        faqSummary.className = "faq-title";

        let faqQuestion = document.createElement("p");
        faqQuestion.innerHTML = item['question'];
        let faqIcon = document.createElement("img");
        faqIcon.src = "imgs/chevron.svg";

        faqSummary.appendChild(faqQuestion);
        faqSummary.appendChild(faqIcon);

        let faqAnswer = document.createElement("p");
        faqAnswer.className = "answer-section"
        faqAnswer.innerHTML = item['answer'];

        faqDetails.appendChild(faqSummary);
        faqDetails.appendChild(faqAnswer);
        faqMain.appendChild(faqDetails);

        faqIcon.style.transitionDuration = '0.3s';

        faqDetails.addEventListener("toggle", function () {
            if (faqDetails.open) {
                faqIcon.style.transform = 'rotate(180deg)';
            } else {
                faqIcon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

createFaqs(faqs);


const creditsP = document.querySelector("#footer-credits p");
const creditsImage = document.querySelector("#footer-credits img");
creditsP.addEventListener("mouseover", (event) => {
    creditsImage.style.visibility = 'visible';
});
creditsP.addEventListener("mouseout", (event) => {
    creditsImage.style.visibility = 'hidden';
});