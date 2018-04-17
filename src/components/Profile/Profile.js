import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getTicks, getTodos, deleteTodo } from '../../ducks/users';
import Chart from './Chart'


class Profile extends Component {
    constructor(){
        super()

        this.state = {
            showAllTicks: false,
            showAllTodos: false,
        }
    }
    

    componentDidMount() {
        this.props.getUserInfo();
        this.props.getTicks();
        this.props.getTodos();
    }

    render() {
        const user = this.props.users.user[0]
        const ticks = this.props.users.ticks
        const todos = this.props.users.todos
        const fiveTicks = this.props.users.ticks.slice(0,5).map((tick) => {
            return <div className='ticks' key={tick.tick_id} style={tickStyle}>
                {/* {console.log(tick)} */}
                {/* for tick.name make it a link to '/route/{tick.route_id} */}
                <h3 style={h3}>{tick.name}</h3>
                <p>{tick.slot_2}</p>
                <p>{tick.slot_3}</p>
                <p>{tick.slot_4}</p>
                <p>{tick.slot_5}</p>
                <p>{tick.slot_6}</p>
                <h3 style={h3}>{tick.stars}</h3>
                <h3 style={h3}>{tick.star_votes}</h3>
                <h3 style={h3}>{tick.rating}</h3>
                <h3 style={h3}>{tick.type}</h3>
                <h3 style={h3}>{tick.date}</h3>
                <h3 style={h3}>{tick.notes}</h3>
            </div>
        })
        const mappedTicks = ticks.map((tick) => {
            return <div className='ticks' key={tick.tick_id} style={tickStyle}>
                {/* {console.log(tick)} */}
                {/* for tick.name make it a link to '/route/{tick.route_id} */}
                <h3 style={h3}>{tick.name}</h3>
                <p>{tick.slot_2}</p>
                <p>{tick.slot_3}</p>
                <p>{tick.slot_4}</p>
                <p>{tick.slot_5}</p>
                <p>{tick.slot_6}</p>
                <h3 style={h3}>{tick.stars}</h3>
                <h3 style={h3}>{tick.star_votes}</h3>
                <h3 style={h3}>{tick.rating}</h3>
                <h3 style={h3}>{tick.type}</h3>
                <h3 style={h3}>{tick.date}</h3>
                <h3 style={h3}>{tick.notes}</h3>
            </div>
        })
        const fiveTodos = this.props.users.ticks.slice(0,5).map((todo) => {
            return <div className='todos' key={todo.todo_id} style={tickStyle}>
                {/* {console.log(todo)} */}
                {/* for tick.name make it a link to '/route/{tick.route_id} */}

                <h3 style={h3}>{todo.name}</h3>
                <p>{todo.slot_2}</p>
                <p>{todo.slot_3}</p>
                <p>{todo.slot_4}</p>
                <p>{todo.slot_5}</p>
                <p>{todo.slot_6}</p>
                <h3 style={h3}>{todo.stars}</h3>
                <h3 style={h3}>{todo.star_votes}</h3>
                <h3 style={h3}>{todo.rating}</h3>
                <h3 style={h3}>{todo.type}</h3>
                <button onClick={() => this.props.deleteTodo(todo.route_id)}>delete</button>
            </div>
        })
        const mappedTodos = todos.map((todo) => {
            return <div className='todos' key={todo.todo_id} style={tickStyle}>
                {/* {console.log(todo)} */}
                {/* for tick.name make it a link to '/route/{tick.route_id} */}

                <h3 style={h3}>{todo.name}</h3>
                <p>{todo.slot_2}</p>
                <p>{todo.slot_3}</p>
                <p>{todo.slot_4}</p>
                <p>{todo.slot_5}</p>
                <p>{todo.slot_6}</p>
                <h3 style={h3}>{todo.stars}</h3>
                <h3 style={h3}>{todo.star_votes}</h3>
                <h3 style={h3}>{todo.rating}</h3>
                <h3 style={h3}>{todo.type}</h3>
                <button onClick={() => this.props.deleteTodo(todo.route_id)}>delete</button>
            </div>
        })

        return (
            <div>
                <h1>User</h1>
                {user ?
                    <div>
                        <div>name {user.user_name}</div>
                        <div>
                            ticks{this.state.showAllTicks? mappedTicks : fiveTicks}
                            <button onClick = {() => this.setState({showAllTicks:!this.state.showAllTicks})}>{this.state.showAllTicks ? <p>Close</p> : <p>Show All</p>}</button>
                        </div>
                        <div>todo List{this.state.showAllTodos? mappedTodos : fiveTodos}
                        <button onClick = {() => this.setState({showAllTodos:!this.state.showAllTodos})}>{this.state.showAllTodos ? <p>Close</p> : <p>Show All</p>}</button>
                        </div>
                        <Chart/>
                    </div>
                    : null}
                    
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state, "hit state")
    return {
        users: state.users

    }
}

export default connect(mapStateToProps, { getUserInfo, getTicks, getTodos, deleteTodo })(Profile)

var tickStyle = {
    display: 'flex',
    justify: 'space-between',
}

var h3 = {
    margin: '15px'
}