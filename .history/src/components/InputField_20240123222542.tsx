import React from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: () => void;
}


const InputField: React.FC<Props> = ({ todo, setTodo, }) => {
    return (
        <form className="task-form">
            <input
                type="input"
                placeholder="Entrer la tâche à effectuer"
                className="input-task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="save-task-btn" type="submit">Enregistrer</button>
        </form>
    )
}
export default InputField