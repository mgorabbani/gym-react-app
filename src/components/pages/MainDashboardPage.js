import React, { Component } from 'react'
import _ from 'lodash'
import Dashbox from '../ui/Dashbox';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { fetchAllMembers } from '../../actions/members'
class MainDashboardPage extends Component {
  componentDidMount() {
    this.props.fetchAllMembers();
  }

  onLoad() {
    console.log(this.props.members, "onLoad")
    const { members } = this.props;
    let data = Object.values(members);
    let count = 0;
    const listItems = data.map((d) => {
      count++
      let Joiningdate = new Date(d.joiningdate);
      let packag;
      if (d.package == '1') packag = "1 Month Package";
      else if (d.package == '3') packag = "3 Month Package";
      else if (d.package == '6') packag = "6 Month Package";
      else if (d.package == '12') packag = "1 Year Package ";
      console.log('package', packag)
      let details = d.phone
      return < tr key={count}>
        <td scope="row" > {count} </td >
        <td>{d.name}</td>
        <td>{d.phone}</td>
        <td>{d.expiringdate}</td>
        <td className="text-center"><Link to={`/dashboard/members/${d.phone}`} params={{ testvalue: "hello" }}>Details</Link> </td>
      </tr >
    });
    return listItems;
  }
  render() {
    console.log("dashboard", this.props.members)
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '30px',
        gridTemplateAreas: '"time time" "counter counter" "soon expired"'
      }}>
        <section style={{ background: "#f9f9f9", padding: '5px', justifyItems: 'center', gridArea: 'time' }} >
          <h4>{new Date().toDateString()} {new Date().toLocaleTimeString()}</h4>
        </section>
        <section style={{ gridArea: 'counter', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyItems: 'center' }}>
          <Dashbox data={{ text: 'Total Members', totalmembers: _.size(this.props.members), subtext: 'So far in all our branches', icon: 'group.png' }} />
          <Dashbox data={{ text: 'New Members', totalmembers: _.size(this.props.members), subtext: 'Joined member this month', icon: 'membership-card.png' }} />
          <Dashbox data={{ text: 'Today\'s Members', totalmembers: 1, subtext: 'From morning to evening', icon: 'today.png' }} />
        </section>

        <section className=" card" style={{ gridArea: 'soon' }} >
          <h3 className="card-header">Membership needs renew</h3>
          <table className="card-body table table-sm table-hover" style={{ background: '#fff' }}>
            <thead className="thead-light">
              <tr>
                <th scope="row">#</th>
                <th scope="row">Name</th>
                <th scope="row">Number</th>
                <th scope="row">Package Expires</th>
                <th scope="row">Actions</th>
              </tr>
            </thead>
            <tbody>

              {this.onLoad()}

            </tbody>
          </table>
        </section>
        <section className=" card" style={{ gridArea: 'expired' }} >
          <h3 className="card-header">Expired membership</h3>
          <table className="card-body table table-sm table-hover" style={{ background: '#fff' }}>
            <thead className="thead-light">
              <tr>
                <th scope="row">#</th>
                <th scope="row">Name</th>
                <th scope="row">Number</th>
                <th scope="row">Package Expires</th>
                <th scope="row">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Golam Rabbani</td>
                <td>01829543210</td>
                <td>In 10 Days</td>
                <td><a href="#">Details</a></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Golam Rabbani</td>
                <td>01829543210</td>
                <td>In 10 Days</td>
                <td><a href="#">Details</a></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Golam Rabbani</td>
                <td>01829543210</td>
                <td>In 10 Days</td>
                <td><a href="#">Details</a></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { members } = state
  console.log("mmmm", members)
  return {
    members
  };
}
export default connect(mapStateToProps, { fetchAllMembers })(MainDashboardPage);