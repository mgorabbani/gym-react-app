import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSingleMemberData } from '../../actions/members'

export class MemberDetailsPage extends Component {
    componentDidMount() {
        this.props.fetchSingleMemberData(this.props.match.params.id)
    }
    render() {
        const m = this.props.members;
        return (
            <div>

                <img src="http://lorempixel.com/200/250/people/" alt="" />
                <h1>{m.name}</h1>
                <h2>{m.phone}</h2>
                <h2>{m.email}</h2>
                <h2>{m.package}</h2>
                <h2>{m.trainer}</h2>
                <h2>{m.dob}</h2>
                <h2>{m.expiringdate}</h2>
                <h2>{m.joiningdate}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, "details")
    return { members: state.members }
}

const mapDispatchToProps = {
    fetchSingleMemberData
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailsPage)
