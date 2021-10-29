import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        const user = this.props.user
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">{user.email}</p>
                    {this.props.userId == user.id ? <a href="/" className="btn btn-primary">Button</a> : null}    
                </div>
            </div>
        )
    }
}
