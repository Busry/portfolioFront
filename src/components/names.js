import React, { Component } from 'react';

class Names extends Component {
  state = {
    loading: true,
    users: [],
  };

  async componentDidMount() {
    console.log('didMount');
    const url = 'https://portfoliosback.herokuapp.com/api/v1/users';
    const res = await fetch(url);
    const users = await res.json();
    this.setState({
      users,
      loading: false,
    });
  }
  render() {
    const list = this.state.users.map((user) => (
      <li key={user.id}> {user.username} </li>
    ));
    return (
      <div>
        <h1>Users</h1>
        <ul className="hi">{this.state.loading ? 'loading...' : list}</ul>
      </div>
    );
  }
}

export default Names;
