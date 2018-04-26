import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import Stars from '../Route/Stars';
import Forum from '../Forums/Forum';
import Footer from '../headerFooter/Footer';


class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.filter.loading,
            routes: this.props.filter.routes,
            currentPage: 1,
            routesPerPage: 21,
        }
        this.handleClick = this.handleClick.bind(this)
    }


    componentDidMount() {
        window.scrollTo(0, 0)
    }



    handleClick(event) {
        console.log(this.state.currentPage)
        this.setState({
            currentPage: Number(event.target.id),
            
        })
        window.scroll(0, 500)
    }


    render() {
        console.log(this.state.loading)

        const filter = this.props.filter



        const { currentPage, routesPerPage } = this.state;

        const indexOfLastRoute = currentPage * routesPerPage;
        const indexOfFirstRoute = indexOfLastRoute - routesPerPage;
        const currentRoutes = Array.isArray(filter.routes) ? filter.routes.slice(indexOfFirstRoute, indexOfLastRoute) : null;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filter.routes.length / routesPerPage); i++) {
            pageNumbers.push(i)
        }

        const renderPageNumbers = pageNumbers.map(num => {
            return (
                <li key={num} id={num} onClick={this.handleClick}> {num} </li>
            )
        })

        let routeDisplay = currentRoutes.map((route, index) => {
            return (
                <div key={index} className='routes'>
                    <span className='route-name' style={{ overflow: 'hidden' }}> <Link to={`/route/${route.id}`}>{route.name}</Link></span>

                    <span>
                        <Link to={`/state/${route.slot_1}`}><p>{route.slot_1}</p></Link>
                        {route.slot_2 ? <Link to={`/state/${route.slot_2}`}><p>{'>' + route.slot_2}</p></Link> : null}
                        {route.slot_3 ? <Link to={`/state/${route.slot_3}`}> <p>{'>' + route.slot_3}</p></Link> : null}
                        {route.slot_4 ? <Link to={`/state/${route.slot_4}`}> <p>{'>' + route.slot_4}</p></Link> : null}
                        {route.slot_5 ? <Link to={`/state/${route.slot_5}`}> <p>{'>' + route.slot_5}</p></Link> : null}
                        {route.slot_6 ? <Link to={`/state/${route.slot_6}`}> <p>{'>' + route.slot_6}</p></Link> : null}
                    </span>

                    <span> <Stars stars={Number(route.stars)} size={'small'} style={{ alignItems: 'center' }} /> </span>
                    <span style={{ textAlign: 'right' }}> {route.rating}</span>
                    <span style={{ textAlign: 'right' }}> {route.type}</span>
                    <span style={{ textAlign: 'right' }}>{route.pitches > 1 ? route.pitches + 'pitches' : route.pitches + 'pitch'}</span>
                </div>
            )
        })

        return (
            <div className='results-wrapper'>
                <div className='filter-box' style={{padding: '15px'}}>
                    <Filter />
                    <Forum />
                    {/* <div className='forum' >
                        <div className='forum-header'>
                            Climbing Forums
                        </div>
                        <div className='forum-body'>
                            <div className='training'>
                                <h2>Training</h2>
                                <a href='https://www.mountainproject.com/forum/topic/114225782/training-philosophy-101'>-Training Philosophy 101</a>
                                <a href='https://www.mountainproject.com/forum/topic/114298752/two-finger-pockets'>-Two finger pockets</a>
                                <a href='https://www.climbing.com/skills/learn-to-train-a-complete-guide-to-climbing-training/'>-Learn to train...</a>
                                <a href='https://www.climbing.com/skills/8-pro-climbers-share-their-top-training-tips/'>-Pro climbers share training tips</a>
                                <a href='https://www.climbing.com/skills/strength-training-for-injury-prevention/'>-Strength Training for Injury Prevention</a>
                                <a href='https://www.climbing.com/skills/jonathan-siegrist-climb-to-train-how-to-improve-by-simply-climbing/'>-Jonathan Siegrist Key to Climbing</a>
                                <a href='https://www.climbing.com/skills/learn-to-train-how-to-get-stronger-fingers/'>-Tendon Training</a>
                            </div>
                            <div className='skills'>
                                <h2>Skills</h2>
                                <a href='https://www.climbing.com/skills/a-simple-way-to-add-friction-to-a-rappel/'>-Adding Friction to a Rappel</a>
                                <a href='https://www.climbing.com/skills/5-etiquette-tips-for-sport-climbing/'>-Sport Climbing Etiquette</a>
                                <a href='https://www.climbing.com/skills/learn-this-the-12-point-trad-anchor-rubric/'>-Evaluating Trad Anchors</a>
                                <a href='https://www.climbing.com/skills/trad-skills-rack-management/'>-Rack Management</a>
                                <a href='https://www.climbing.com/skills/learn-to-climb-trad-a-complete-beginners-guide/'>Trad is Rad</a>
                                <a href='https://www.rei.com/learn/expert-advice/traditional-climbing-basics.html'>-Trad Climbing Basics</a>
                                <a href='https://www.climbing.com/skills/five-tips-for-safer-belaying/'>-5 Tips for a Safer Belay</a>
                                <a href='https://www.climbing.com/skills/learn-this-belay-extensions/'>-Belay Extensions</a>
                                <a href='https://www.climbing.com/skills/ride-the-wave-perfect-your-climbing-technique-with-these-skills-and-drills/'>-Better Climbing Technique</a>
                            </div>

                        </div>
                    </div> */}
                </div>
                <div className='results'>
                    <span>
                        <span>
                            <h1>Filtered Routes</h1>
                        </span>
                        {routeDisplay}
                    </span>
                    <ul className='page-numbers'>

                        {renderPageNumbers}

                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        filter: state.filter,
        routes: state.routes,
    }
}


export default connect(mapStateToProps)(Results);