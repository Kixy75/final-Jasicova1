import React, { Component } from 'react';
import './people.css';
import { Link } from 'react-router-dom';
class Users extends Component {
    componentWillMount() {
        this.setState({users: []});
    }

    componentDidMount() {
        this.loadPeople();
    }

    loadPeople() {

        fetch('https://jsonplaceholder.typicode.com/users')

            .then(response => response.json())

            .then(people => {

                this.setState({users: people});

            });

    }

    renderUsers() {
        return (
            <ul className="ludia">

                {this.state.users.filter(u => {
                    return u.name.substring(0, 1).toUpperCase() === 'C'
                }).map(u => {
                    return (<li key={u.id}>{u.name}</li>);
                })}
            </ul>)
    }

    render() {
        return (
            <div>
                {this.renderUsers()}
            </div>
        );
    }
}

export default Users;
