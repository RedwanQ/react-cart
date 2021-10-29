import React, { Component } from 'react'
import UserCard from '../components/UserCard';

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
                    {this.state.users.map((user, idx) => <UserCard key={idx} user={user} userId={this.props.userId} />)}
                </ul>
            </div>
        )
    }
}
