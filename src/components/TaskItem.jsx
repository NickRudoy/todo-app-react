import { useState } from "react";
// styles
import styles from "./TaskItem.module.css";

// imports library
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";



const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
        toggleTask(task.id);
    }

    return (
        <li className={styles.task}>
         <div className={styles["task-group"]}>
            <input type="checkbox" 
            className={styles.checkbox}
            checked={isChecked}
            onChange={handleCheckboxChange}
            name={task.name}
            id={task.id}
            />
            <label 
            htmlFor={task.id}
            className={styles.label}
            >
                {task.name}
                <p className={styles.checkmark}>
                <CheckIcon  strokeWidth={2} width={24} height={24}/>
                </p>
            </label>
         </div>
         <div className={styles["task-group"]}>
            <button
            className="btn"
            aria-label={`Update ${task.name} task`}
            onClick={() => enterEditMode(task)}
            >
                <PencilSquareIcon  strokeWidth={2} width={24} height={24}/>
                
            </button>
            <button
            className={`btn ${styles.delete}`}
            aria-label={`Delete ${task.name} task`}
            onClick={() => deleteTask(task.id)}
            >
                <TrashIcon  strokeWidth={2} width={24} height={24}/> 
            </button>
         </div>

        </li>
    )
}

export default TaskItem