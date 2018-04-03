import React from 'react'

import api from '../../api';

const TodoForm = ({ addTodo }) => {
    // Input Tracker
    let input;
    // Return JSX
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addTodo(input.value);
            input.value = '';
        }}>
            <input className="form-control col-md-12" ref={node => {
                input = node;
            }} />
            <br />
        </form>
    );
};

const Todo = ({ todo, remove }) => {
    // Each Todo
    return (<a className="list-group-item" onClick={() => { remove(todo._id) }}>{todo.name}</a>);
}

const TodoList = ({ todos, remove }) => {
    // Map through the todos
    const todoNode = todos.map((todo, k) => {
        console.log("toooodo", todo)
        return (<Todo todo={todo} key={k} remove={remove} />)
    });
    return (<div className="list-group" style={{ marginTop: '30px' }}>{todoNode}</div>);
}

// Contaner Component
// Todo Id
window.id = 0;
class ExecercizeList extends React.Component {
    constructor(props) {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
    }
    // Lifecycle method
    componentDidMount() {
        // Make HTTP reques with Axios
        // Set state with result
        this.setState({ data: this.props.data });
    }
    // Add todo handler
    addTodo(val) {
        // Assemble data
        const todo = { name: val, day: this.props.day, link: '', phone: this.props.phone }
        // Update data
        api.user.addExcercise(todo)
            .then((res) => {
                this.state.data.push(todo);
                this.setState({ data: this.state.data });
            });
    }
    // Handle remove
    handleRemove(id) {
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
            if (todo._id !== id)
                return todo;
        });
        // Update state with filter
        api.user.removeExcercise({ _id: id, phone: this.props.phone })
            .then((res) => {
                this.setState({ data: remainder });
            })
    }

    render() {
        // Render JSX
        return (
            <div>
                {this.props.day ? <h1>Day {this.props.day}</h1> : <h1>Every Day</h1>}

                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}

export default ExecercizeList;

