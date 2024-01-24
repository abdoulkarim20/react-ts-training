import { ITodo } from '../todo.model';
import './styles.css'
interface Props {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todo-liste">
            {}}
        </div>
    )
}
export default TodoList;