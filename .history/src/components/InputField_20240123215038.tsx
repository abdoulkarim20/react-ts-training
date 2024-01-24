import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}


const InputField = ({ todo, setTodo }:P) => {
    return (
        <form className="task-form">
            <input type="input" placeholder="Entrer la tâche à effectuer" className="input-task" />
            <button className="save-task-btn" type="submit">Enregistrer</button>
        </form>
    )
}
export default InputField