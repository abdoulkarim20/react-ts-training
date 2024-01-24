import React from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const InputField:React.FC<Props> = ({ todo, setTodo }: Props) => {
    return (
        <form className="task-form">
            <input type="input" placeholder="Entrer la tâche à effectuer" className="input-task" />
            <button className="save-task-btn" type="submit">Enregistrer</button>
        </form>
    );
}
export default InputField