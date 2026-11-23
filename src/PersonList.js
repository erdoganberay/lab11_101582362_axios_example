import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        <h2>Person List (Axios)</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Cell</th>
              <th>Age</th>
              <th>City</th>
              <th>Country</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(person => (
              <tr key={person.login.uuid}>
                <td>{person.name.title} {person.name.first} {person.name.last}</td>
                <td>{person.gender}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.cell}</td>
                <td>{person.dob.age}</td>
                <td>{person.location.city}</td>
                <td>{person.location.country}</td>
                <td>{person.login.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
