import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    users: data
                })
            }
        )
    }

   

    render() {
        return (
            <div>
                <h1 className='text-center'>Users</h1>
                <ul className='list-group'>
                    {this.state.users.map((user, idx) => <li key={idx} className='list-group-item'>{user.username} - {user.email}</li>)}
                </ul>
            </div>
        )
    }
}
