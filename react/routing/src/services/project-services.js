import projects from "../data/projects.json";

// Instead of getting the data from ProjectList directly, we create a functions called getAllProjects
// simulate a backend request - that way we don't have to change it later on
// good for practicing loading states

// export const getAllProjects = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(projects);
//         }, 500);
//     });
// };

// // simple way of doing this if we don't care about loading state

// // export const getAllProjects = async () => {
// //     return projects;
// // };

// export const getProjectById = (id) => {
//     const project = projects.find((project) => project.id === id); // returns a project or undefined

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (project) {
//                 return resolve(project);
//             }
//             reject(new Error(`Project with id: ${id} does not exist`));
//         }, 1000);
//     });
// };

// REAL REQUESTS
export const getAllProjects = async () => {
    const response = await fetch("http://localhost:3000/projects");
    const projects = await response.json();
    return projects;
};

export const getProjectById = async (id) => {
    const response = await fetch(`http://localhost:3000/projects/${id}`);
    if (!response.ok) {
        throw new Error(`Project with id: ${id} does not exist`);
    }
    const projects = await response.json();
    return projects;
};
