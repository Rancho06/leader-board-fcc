import React, { Component } from 'react'
import UserStore from '../stores/UserStore'
import { API_recent, API_all } from '../stores/APIStore'
import UserList from './UserList'
import { Navbar, Panel, Table } from 'react-bootstrap'

export default class Page extends Component {

    fetchRecent(e) {
        UserStore.fetchRecentUsers()
    }

    fetchAll(e) {
        UserStore.fetchAllUsers()
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
                    <Panel collapsible defaultExpanded header="Leader Board">
                        <Table striped bordered condensed hover fill>
                            <thead>
                                <tr>
                                    <th className="text-primary">#</th>
                                    <th className="text-primary">Camper</th>
                                    <th onClick={this.fetchRecent} className="text-success">Points in Past 30 days</th>
                                    <th onClick={this.fetchAll} className="text-primary">All time Points</th>
                                </tr>
                            </thead>
                            <UserList store={UserStore} />
                        </Table>
                    </Panel>
                </div>
                <footer>
                    <p>CopyRight Shu Zhou 2016</p>
                </footer>
            </div>
        )
    }
}
