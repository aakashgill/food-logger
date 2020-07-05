import React, { Component } from 'react'
import Card from './Card';

export class DisplayLogs extends Component {

    renderFood = (item) => {
    return (
            <Card key={item._id} meal={item.meal} time={item.timeline} comments={item.comments} environment={item.environment} cardName = {item.food}/>
        )
    }

    render() {
        return (
            <ul className="flex">
                {
                    this.props.logs.map(this.renderFood)
                }
            </ul>
        )
    }
}

export default DisplayLogs
