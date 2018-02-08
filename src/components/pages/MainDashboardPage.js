import React, { Component } from 'react'
import Dashbox from '../ui/Dashbox';

export default class MainDashboardPage extends Component {
  render() {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '30px',
        gridTemplateAreas: '"time time" "counter counter" "soon expired"'
      }}>
        <section style={{ background: "#f9f9f9", padding: '5px', justifyItems: 'center', gridArea: 'time' }} >
          <h4>{new Date().toString()}</h4>
        </section>
        <section style={{ gridArea: 'counter', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyItems: 'center' }}>
          <Dashbox data={{ text: 'Total Members', totalmembers: 120, subtext: 'So far in all our branches', icon: 'group.png' }} />
          <Dashbox data={{ text: 'New Members', totalmembers: 10, subtext: 'Joined member this month', icon: 'membership-card.png' }} />
          <Dashbox data={{ text: 'Today\'s Members', totalmembers: 53, subtext: 'From morning to evening', icon: 'today.png' }} />
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
