let myProjects = [];

async function fetchProjects() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        myProjects = data;
        renderProject(myProjects);
    } catch (error) {
        console.error("Data Failed: ", error);
    }
}

fetchProjects()

const projectContainer = document.getElementById("projects")
const contactForm = document.getElementById("contactForm")
const nameInput = document.getElementById("nameInput")
const nameError = document.getElementById("nameError")
const emailInput = document.getElementById("emailInput")
const emailError = document.getElementById("emailError")

function renderProject(datas) {
    projectContainer.innerHTML = ``;
    datas.forEach(project => {
        projectContainer.innerHTML +=
            `<article class="project-card">
        <img src="${project.image}" alt="${project.alt}">
        <h3>${project.title}</h3>
        <p>${project.description}</p> 
        <p style="font-weight:Bold; color:blue;">${project.category}</p>
        </article>
        `;

    })
}

function filterProjects(kategori) {
    if (kategori === "all") {
        renderProject(myProjects);
    } else {
        const filteredProject = myProjects.filter(project => project.category === kategori);
        renderProject(filteredProject);
    }
}

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;
    if (nameInput.value === "") {
        nameError.innerText = 'Name Invalid!';
        isValid = false;
    } else {
        nameError.innerText = "";
    }

    if (emailInput.value === "") {
        emailError.innerText = "Email Invalid!";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    if (isValid === true) {
        alert("Thank Youuu!")
        contactForm.reset();
        console.log(isValid)
    }
});

renderProject(myProjects)


