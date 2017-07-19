import React, { Component } from 'react';
import { observer } from "mobx-react";
import User from "./User";

@observer
export default class UserList extends Component {

    render() {
        let { users } = this.props.store;
        users = users.map((elem, i) => (
          <User
            key={i} 
            rank={i + 1}
            imageURL={elem.img}
            username={elem.username}
            recent={elem.recent}
            alltime={elem.alltime}
          />
        ));
        return (
            <tbody> {users} </tbody>
        );
    }
};
