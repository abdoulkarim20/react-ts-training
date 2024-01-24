import React, { useRef } from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent) => void;
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="task-form" onSubmit={(e) => {
            handleAddTodo(e)
            inputRef.current
        }}>
            <input
                ref={inputRef}
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