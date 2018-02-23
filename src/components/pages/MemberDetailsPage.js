import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSingleMemberData } from '../../actions/members'

export class MemberDetailsPage extends Component {
    state = {
        pack: {
            package_name: '',
            package_month: ''
        },
        trainer: {
            trainer_name: '',
            trainer_number: ''
        }

    }

    componentDidMount() {
        let that = this;
        this.props.fetchSingleMemberData(this.props.match.params.id).then(() => {
            const m = this.props.members;
            console.log("ppp", m.package)
            this.setState({
                pack: m.package || this.state.pack,
                trainer: m.trainer || this.state.trainer
            })
        })

    }
    render() {
        const m = this.props.members;
        console.log("tra", this.state.trainer)

        return (
            <div className="row">
                <aside className="col-sm-3">
                    <img src="http://lorempixel.com/200/250/nature/" alt="" />
                    <h1>{m.name}</h1>
                </aside>
                <content className="col-sm-9">
                    <h2>{m.phone}</h2>
                    <h2>{m.email}</h2>
                    <h2>{m.gender}</h2>
                    <h2>Trainer Name: {this.state.trainer.trainer_name}</h2>
                    <h2>Trainer Number: {this.state.trainer.trainer_number}</h2>
                    <h2>Package Name: {this.state.pack.package_name}</h2>
                    <h2>{m.dob}</h2>
                    <h2>{m.expiringdate}</h2>
                    <h2>{m.joiningdate}</h2>
                </content>
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
