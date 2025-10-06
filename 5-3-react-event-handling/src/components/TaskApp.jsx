import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleSubmit = () => {
        const value = text.trim();
        if (!value) return;

        const newTask = { id: Date.now(), text: value };
        setTasks((prev) => [...prev, newTask]);
        setText("");
    };

    const handleDelete = (id) => {};
    const handleClearAll = () => {};

    return (
        <section className="card">
            <div className="inputRow">
                <input
                    type="text"
                    placeholder="Type a task..."
                    className="input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                    }}
                />
                <button className="btn btn--primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>

            <TaskList tasks={tasks} />

            <div className="footerRow">
                <button className="btn btn--ghost" onClick={handleClearAll}>
                    Clear All
                </button>
            </div>
        </section>
    );
}
