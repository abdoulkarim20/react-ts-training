const InputField = () => {
    return (
        <form className="task-form">
            <input type="input" placeholder="Entrer la tâche à effectuer" className="input-task" />
            <button className="save-task-btn">Enregistrer</button>
        </form>
    )
}
export default InputField