import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks = [], onDelete }) {
    if (tasks.length === 0) {
        return <p className="empty">No tasks yet. Add your first task 👇</p>;
    }

    return (
        <ul className="taskList">
            {tasks.map((task) => (
                <TaskItem key={task.id} id={task.id} text={task.text} onDelete={onDelete} />
            ))}
        </ul>
    );
}
