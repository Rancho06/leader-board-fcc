import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

export default class User extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.rank}</td>
                <td><Image responsive circle thumbnail alt="50x50" width="50" height="50" src={this.props.imageURL} /> {this.props.username}</td>
                <td style={{"text-align":"center"}}>{this.props.recent}</td>
                <td style={{"text-align":"center"}}>{this.props.alltime}</td>
            </tr>
        )
    }
}
