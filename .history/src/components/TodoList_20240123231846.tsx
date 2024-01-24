import './styles.css'
interface Props{
    todos:Tod
}
const TodoList: React.FC = ({ todos, setTodos }: Props) => {
    return (
        <div className="todo-liste">
        </div>
    )
}
export default TodoList;