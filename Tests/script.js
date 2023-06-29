const priorityLevels = {
    "very high": 4,
    high: 3,
    medium: 2,
    low: 1,
    "": 0,
};

const taskData = [
    { task: "Clean the bathroom", priority: "low" },
    { task: "Walk the dog", priority: "high" },
    { task: "Do codewars", priority: "very high" },
    { task: "Cook dinner", priority: "medium" },
];

const asd = taskData.sort((a, b) => {
    return priorityLevels[b.ass] - priorityLevels[a.ass];
});

console.log(asd);
