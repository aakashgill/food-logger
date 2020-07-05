import React, { Component } from 'react'

export class Card extends Component {    
    render() {
        return (
            <li className="card-container">
                <div className="card-name mb-10">
                    <span>
                        {
                            this.props.cardName ? this.props.cardName[0].toUpperCase() : null
                        }
                    </span>
                    <strong>{this.props.cardName}</strong>
                </div>
                <div className="flex mb-10">
                    <div className="mb-10"><b>Meal:</b> {this.props.meal}</div>
                    <div><b>Environment:</b> {this.props.environment}</div>
                </div>
                { 
                    (this.props.comments) ? <div><b>Comments:</b> {this.props.comments}</div> : null
                }
                <time className={this.props.time ? '' : 'hidden'}>
                    {
                        (this.props.time) ? 
                            new Date(this.props.time).toLocaleDateString() : null
                    }
                </time>
            </li>
        )
    }
}

export default Card
