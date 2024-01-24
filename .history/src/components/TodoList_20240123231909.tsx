import { ITodo } from '../todo.model';
import './styles.css'
interface Props{
    todos:ITodo[];
    setTodos:
}
const TodoList: React.FC = ({ todos, setTodos }: Props) => {
    return (
        <div className="todo-liste">
        </div>
    )
}
export default TodoList;