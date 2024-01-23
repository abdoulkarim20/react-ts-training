const InputField = () => {
    return (
        <form className="task-form">
            <input type="input" placeholder="Entrer la tâche à effectuer" className="input-task" />
            <button>Enregistrer</button>
        </form>
    )
}
export default InputField