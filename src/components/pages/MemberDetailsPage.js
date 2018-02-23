import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSingleMemberData } from '../../actions/members'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
import ExcercizeList from './ExcercizeList';
export class MemberDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pack: {
                package_name: '',
                package_month: ''
            },
            trainer: {
                trainer_name: '',
                trainer_number: ''
            },

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



                <Tabs className="container panel panel-primary">
                    <div className="panel-heading">
                        <h4>{m.name}</h4>
                        <div class="options">
                            <TabList className="nav nav-tabs">
                                <Tab>Details</Tab>
                                <Tab>Excersize Chart</Tab>
                                <Tab>Food Chart</Tab>

                            </TabList>

                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="tab-content">
                            <TabPanel>
                                <aside className="col-sm-3">
                                    <img src="http://lorempixel.com/200/250/nature/" alt="" />
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
                            </TabPanel>
                            <TabPanel>
                                <div className="col-md-4">
                                    <ExcercizeList day={1} />
                                </div>
                                <div className="col-md-4">
                                    <ExcercizeList day={2} />
                                </div>
                                <div className="col-md-4">
                                    <ExcercizeList day={3} />
                                </div>
                                <div className="col-md-4">
                                    <ExcercizeList day={4} />
                                </div>
                                <div className="col-md-4">
                                    <ExcercizeList />
                                </div>
                            </TabPanel>
                            <TabPanel >

                            </TabPanel>
                        </div>
                    </div>
                </Tabs>

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
