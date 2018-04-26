import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2'
import { connect } from 'react-redux';
import { getTicks, getUserInfo } from '../../ducks/users';

class Chart extends Component {

    componentDidMount() {
        this.props.getUserInfo();
        this.props.getTicks();
    }

    render() {
        const ticks = this.props.users.ticks
        //pie chart data
        const tradTotal = ticks.filter(e => e.type.includes('Trad')).length
        const sportTotal = ticks.filter(e => e.type.includes('Sport')).length
        const boulderTotal = ticks.filter(e => e.type.includes('Boulder')).length
      
        const pieChartData = {
            labels: ['Trad', 'Sport', 'Boulder'],
            datasets: [
                {
                    data:[
                        tradTotal, sportTotal, boulderTotal
                    ],
                    backgroundColor: ['#486796', '#f2f2f2', '#2e2e2e']
                }
            ]
        }
        //bar chart data
        const fiveSixTotal = ticks.filter(e => e.rating.includes('5.6')).length
        const fiveSevenTotal = ticks.filter(e => e.rating.includes('5.7')).length
        const fiveEightTotal = ticks.filter(e => e.rating.includes('5.8')).length
        const fiveNineTotal = ticks.filter(e => e.rating.includes('5.9')).length
        const fiveTenTotal = ticks.filter(e => e.rating.includes('5.10')).length
        const fiveElevenTotal = ticks.filter(e => e.rating.includes('5.11')).length
        const fiveTwelveTotal = ticks.filter(e => e.rating.includes('5.12')).length
        const fiveThirteenTotal = ticks.filter(e => e.rating.includes('5.13')).length
        const fiveFourteenTotal = ticks.filter(e => e.rating.includes('5.14')).length
        const barChartData = {
            labels: ['5.6', '5.7', '5.8', '5.9', '5.10', '5.11', '5.12', '5.13', '>=5.14'],
            datasets: [
                {
                    label: 'grade',
                    data:[
                        fiveSixTotal, fiveSevenTotal, fiveEightTotal, fiveNineTotal, fiveTenTotal, fiveElevenTotal, fiveTwelveTotal, fiveThirteenTotal, fiveFourteenTotal
                    ],
                    backgroundColor: '#486796'
                }
            ]
        }

        return (
            <div className = 'charts'>
                <div style = {{width: '600px'}}>
                <Bar
                    data={barChartData}
                    width={100}
                    height={300}
                    options={{
                        maintainAspectRatio: false
                    }}/>
                </div>
                <div style = {{width: '400px'}}>
                <Pie
                    data={pieChartData}
                    width={100}
                    height={400}
                    options={{
                        maintainAspectRatio: false
                    }}
                    />
                    </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state.users

    }
}

export default connect(mapStateToProps, { getTicks, getUserInfo })(Chart)