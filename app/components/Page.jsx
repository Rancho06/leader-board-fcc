import React, { Component } from 'react'
import { Navbar, Panel, Table, Button } from 'react-bootstrap'
import $ from 'jquery'

import UserStore from '../stores/UserStore'
import { API_recent, API_all } from '../stores/APIStore'
import UserList from './UserList'

export default class Page extends Component {

    fetchRecent() {
        UserStore.fetchRecentUsers()
        $("#recent_header").addClass("btn-success").removeClass("btn-default");
        $("#alltime_header").addClass("btn-default").removeClass("btn-success");
        return false
    }

    fetchAll() {
        UserStore.fetchAllUsers()
        $("#alltime_header").addClass("btn-success").removeClass("btn-default");
        $("#recent_header").addClass("btn-default").removeClass("btn-success");
        return false
    }

    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="https://www.freecodecamp.com">FreeCodeCamp</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <div className="container-fluid">
                    <Panel bsStyle="primary" collapsible defaultExpanded header="Leader Board" footer="CopyRight 2016 @ Shu Zhou" className="text-center">
                        <Table striped bordered condensed hover fill>
                            <thead>
                                <tr>
                                    <th className="text-primary">#</th>
                                    <th className="text-primary">Camper Name</th>
                                    <th><Button id="recent_header" block bsStyle="success" onClick={this.fetchRecent}>Points in Past 30 days</Button></th>
                                    <th><Button id="alltime_header" block onClick={this.fetchAll}>All time Points</Button></th>
                                </tr>
                            </thead>
                            <UserList store={UserStore} />
                        </Table>
                    </Panel>
                </div>
            </div>
        )
    }
}
