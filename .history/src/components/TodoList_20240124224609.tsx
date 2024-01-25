import { ITodo } from '../todo.model';
import SingleTodo from './SingleTodo';
import './styles.css'
interface Props {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todo-liste">
            {todos.map((todo) => (
                <SingleTodo todo={todo} key={todo.id}
                todos={to}
                 />
            ))}
        </div>
    )
}
export default TodoList;