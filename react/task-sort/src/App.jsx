import React from "react";
import { taskData } from "./data/taskData";

export const App = () => {
    const [tasks, setTasks] = useState(taskData);

    return <div>App</div>;
};
