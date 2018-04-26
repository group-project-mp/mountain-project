import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getTicks, getTodos, deleteTodo } from '../../ducks/users';
import Chart from './Chart';
import { Link } from 'react-router-dom'
import Stars from '../Route/Stars'
import Footer from '../headerFooter/Footer'

class Profile extends Component {
    constructor() {
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
        const fiveTicks = ticks.slice(0, 5).map((tick) => {
            return <div className='ticks-row' key={tick.tick_id}>
                <Link to={`/route/${tick.route_id}`}><span>{tick.name}</span></Link>
                <div>
                {tick.slot_2 !== null ? <Link to={`/area/${tick.slot_2}`}> <span> {tick.slot_2}</span></Link> : null}
                    {tick.slot_3 !== null ? <Link to={tick.slot_4 ? `/subarea/${tick.slot_3}`: `/finalarea/${tick.slot_3}`}> <span>{'> ' + tick.slot_3}</span></Link> : null}
                    {tick.slot_4 !== null ? <Link to={tick.slot_5 ? `/subarea/${tick.slot_4}`: `/finalarea/${tick.slot_4}`}> <span>{'> ' + tick.slot_4}</span></Link> : null}
                    {tick.slot_5 !== null ? <Link to={tick.slot_6 ? `/subarea/${tick.slot_5}`: `/finalarea/${tick.slot_5}`}> <span>{'> ' + tick.slot_5}</span></Link> : null}
                    {tick.slot_6 !== null ? <Link to={`/finalarea/${tick.slot_6}`}> <span>{'> ' + tick.slot_6}</span></Link> : null}
                </div>
                <div className = 'profile-row'>
                    <Stars stars={Number(tick.stars)} size='small' />
                    <p>{tick.star_votes}</p>
                </div>
                    <span>{tick.rating}</span>
                    <span>{tick.type}</span>
                    <span>{tick.date}</span>
                    <span>{tick.notes}</span>
            </div>
        })
        const mappedTicks = ticks.map((tick) => {
            return <div className='ticks-row' key={tick.tick_id}>
                <Link to={`/route/${tick.route_id}`}><span>{tick.name}</span></Link>
                <div>
                {tick.slot_2 !== null ? <Link to={`/area/${tick.slot_2}`}> <span> {tick.slot_2}</span></Link> : null}
                    {tick.slot_3 !== null ? <Link to={tick.slot_4 ? `/subarea/${tick.slot_3}`: `/finalarea/${tick.slot_3}`}> <span>{'> ' + tick.slot_3}</span></Link> : null}
                    {tick.slot_4 !== null ? <Link to={tick.slot_5 ? `/subarea/${tick.slot_4}`: `/finalarea/${tick.slot_4}`}> <span>{'> ' + tick.slot_4}</span></Link> : null}
                    {tick.slot_5 !== null ? <Link to={tick.slot_6 ? `/subarea/${tick.slot_5}`: `/finalarea/${tick.slot_5}`}> <span>{'> ' + tick.slot_5}</span></Link> : null}
                    {tick.slot_6 !== null ? <Link to={`/finalarea/${tick.slot_6}`}> <span>{'> ' + tick.slot_6}</span></Link> : null}
                </div>
                <div className = 'profile-row'>
                    <Stars stars={Number(tick.stars)} size='small' />
                    <p>{tick.star_votes}</p>
                </div>
                    <span>{tick.rating}</span>
                    <span>{tick.type}</span>
                    <span>{tick.date}</span>
                    <span>{tick.notes}</span>
            </div>
        })
        const fiveTodos = todos.slice(0, 5).map((todo) => {
            return <div className='todos-row' key={todo.todo_id}>
                <Link to={`/route/${todo.route_id}`}><span>{todo.name}</span></Link>
                <div>
               {todo.slot_2 !== null ? <Link to={`/area/${todo.slot_2}`}> <span> {todo.slot_2}</span></Link> : null}
                    {todo.slot_3 !== null ? <Link to={todo.slot_4 ? `/subarea/${todo.slot_3}`: `/finalarea/${todo.slot_3}`}> <span>{'> ' + todo.slot_3}</span></Link> : null}
                    {todo.slot_4 !== null ? <Link to={todo.slot_5 ? `/subarea/${todo.slot_4}`: `/finalarea/${todo.slot_4}`}> <span>{'> ' + todo.slot_4}</span></Link> : null}
                    {todo.slot_5 !== null ? <Link to={todo.slot_6 ? `/subarea/${todo.slot_5}`: `/finalarea/${todo.slot_5}`}> <span>{'> ' + todo.slot_5}</span></Link> : null}
                    {todo.slot_6 !== null ? <Link to={`/finalarea/${todo.slot_6}`}> <span>{'> ' + todo.slot_6}</span></Link> : null}
                </div>
                <div className = 'profile-row'>
                    <Stars stars={Number(todo.stars)} size='small' />
                    <p>{todo.star_votes}</p>
                </div>
                    <span>{todo.rating}</span>
                    <span>{todo.type}</span>
                <button onClick={() => this.props.deleteTodo(todo.route_id)}>Delete Todo</button>
            </div>
        })
        const mappedTodos = todos.map((todo) => {
            return <div className='todos-row' key={todo.todo_id}>
                <Link to={`/route/${todo.route_id}`}><span>{todo.name}</span></Link>
                <div>
                {todo.slot_2 !== null ? <Link to={`/area/${todo.slot_2}`}> <span> {todo.slot_2}</span></Link> : null}
                    {todo.slot_3 !== null ? <Link to={todo.slot_4 ? `/subarea/${todo.slot_3}`: `/finalarea/${todo.slot_3}`}> <span>{'> ' + todo.slot_3}</span></Link> : null}
                    {todo.slot_4 !== null ? <Link to={todo.slot_5 ? `/subarea/${todo.slot_4}`: `/finalarea/${todo.slot_4}`}> <span>{'> ' + todo.slot_4}</span></Link> : null}
                    {todo.slot_5 !== null ? <Link to={todo.slot_6 ? `/subarea/${todo.slot_5}`: `/finalarea/${todo.slot_5}`}> <span>{'> ' + todo.slot_5}</span></Link> : null}
                    {todo.slot_6 !== null ? <Link to={`/finalarea/${todo.slot_6}`}> <span>{'> ' + todo.slot_6}</span></Link> : null}
                </div>
                <div className = 'profile-row'>
                    <Stars stars={Number(todo.stars)} size='small' />
                    <p>{todo.star_votes}</p>
                </div>
                    <span>{todo.rating}</span>
                    <span>{todo.type}</span>
                <button onClick={() => this.props.deleteTodo(todo.route_id)}>Delete Todo</button>
            </div>
        })

        return (
            <div className='profile'>
                <div className = 'title'>
                    <h1>Your Profile</h1>
                </div>
                {user ?
                    <div className='user-container'>
                    <div className = 'user-name'>
                        <h2>{user.user_name}</h2>
                        </div>
                        <div className='ticks-container'>
                            <h2>Ticks</h2>
                            {this.state.showAllTicks ? mappedTicks : fiveTicks}
                           {mappedTicks.length > 5 ? <button className = 'toggle-button' onClick={() => this.setState({ showAllTicks: !this.state.showAllTicks })}>{this.state.showAllTicks ? <p>Close</p> : <p>View All {mappedTicks.length}</p>}</button> : null}
                        </div>
                        <div className='todos-container'>
                            <h2>Todos</h2>
                            {this.state.showAllTodos ? mappedTodos : fiveTodos}
                           {mappedTodos.length > 5 ? <button className = 'toggle-button' onClick={() => this.setState({ showAllTodos: !this.state.showAllTodos })}>{this.state.showAllTodos ? <p>Close</p> : <p>View All {mappedTodos.length}</p>}</button> : null}
                        </div>
                        <div className ='profile-chart'>
                        <h2>Tick Breakdown</h2>
                            <Chart />
                        </div>
                    </div>
                    : null}
                    <footer>
                        <Footer/>
                    </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { getUserInfo, getTicks, getTodos, deleteTodo })(Profile)

