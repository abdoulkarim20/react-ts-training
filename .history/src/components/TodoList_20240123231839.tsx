import './styles.css'
interface Props{
    todos:to
}
const TodoList: React.FC = ({ todos, setTodos }: Props) => {
    return (
        <div className="todo-liste">
        </div>
    )
}
export default TodoList;