import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAllMembers, fetchSearchResult } from '../../actions/members'
class FindMemberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.onSearch = this.onSearch.bind(this);
    }


    onLoad() {
        console.log(this.props, "onLoad")
        const { members } = this.props;
        let data = Object.values(members);
        let count = 0;
        const listItems = data.map((d) => {
            count++
            let Joiningdate = new Date(d.joiningdate);
            let expiringdate = new Date(d.expiringdate);
            console.log(Joiningdate.toDateString(), "daaat")
            return < tr key={count}>
                <th scope="row" > {count} </th >
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>{d.package}</td>
                <td>{Joiningdate.toDateString()}</td>
                <td>{expiringdate.toDateString()}</td>
                <td><a href="find-member/edit">Details</a> </td>
            </tr >
        });
        return listItems;
    }
    componentDidMount() {
        this.props.fetchAllMembers();
    }

    onSearch(e) {
        let { value } = e.target;
        if (value.length > 2) {
            this.props.fetchSearchResult(value);
        } else if (value.length == 0) {
            this.props.fetchAllMembers();
        }

    }
    render() {
        return (
            <div>
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Package Name</th>
                            <th scope="col">Joining Date</th>
                            <th scope="col">Package Expires</th>
                            <th scope="col"> <input type="text" onChange={this.onSearch} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.onLoad()}
                    </tbody>
                </table>
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

export default connect(mapStateToProps, { fetchAllMembers, fetchSearchResult })(FindMemberPage);