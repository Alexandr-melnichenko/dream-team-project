let loadedProjects = 3; 
const projectsPerLoad = 3; 

export function loadProjects() {
    const projectList = document.getElementById('projects-list');
    const projects = Array.from(projectList.children); 

    for (let i = loadedProjects; i < loadedProjects + projectsPerLoad && i < projects.length; i++) {
        projects[i].style.display = 'block'; 
    }

    loadedProjects += projectsPerLoad; 

    if (loadedProjects >= projects.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

document.getElementById('load-more').addEventListener('click', loadProjects);

document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('projects-list');
    const projects = Array.from(projectList.children);
    projects.forEach((project, index) => {
        if (index >= loadedProjects) {
            project.style.display = 'none'; 
        }
    });
});
