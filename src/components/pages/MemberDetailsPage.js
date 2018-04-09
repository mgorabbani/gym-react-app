import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSingleMemberData } from '../../actions/members'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
import ExcercizeList from './ExcercizeList';
import FoodChart from './FoodChart';
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
            const m = this.props.member;
            console.clear()
            console.log("workout_items", m.workout_items)
            this.setState({
                pack: m.package || this.state.pack,
                trainer: m.trainer || this.state.trainer
            })
        })
    }
    renderExcersizeList() {
        let list = this.props.member.workout_items || [];
        let day1 = list.filter(e => e.day == 1);
        let day2 = list.filter(e => e.day == 2);
        let day3 = list.filter(e => e.day == 3);
        let day4 = list.filter(e => e.day == 4);
        let day5 = list.filter(e => e.day == 5);
        let day6 = list.filter(e => e.day == 6);
        let day0 = list.filter(e => e.day == 0);
        let alllist = [day0, day1, day2, day3, day4, day5, day6];
        console.log(alllist)

        return alllist.map((e, k) => {
            return <div className="col-md-4">
                <ExcercizeList day={k} data={e} phone={this.props.member.phone} />
            </div>
        })

    }
    renderFoodChartList() {
        let list = this.props.member.food_chart || [];
        let morning = list.filter(e => e.time == 'Morning');
        let noon = list.filter(e => e.time == 'Noon');
        let evening = list.filter(e => e.time == 'Evening');
        let night = list.filter(e => e.time == 'Night');

        return <div>
            <div className="col-md-4">
                <FoodChart data={morning} time={'Morning'} phone={this.props.member.phone} />
            </div>
            <div className="col-md-4">
                <FoodChart data={noon} time={'Noon'} phone={this.props.member.phone} />
            </div>
            <div className="col-md-4">
                <FoodChart data={evening} time={'Evening'} phone={this.props.member.phone} />
            </div>
            <div className="col-md-4">
                <FoodChart data={night} time={'Night'} phone={this.props.member.phone} />
            </div>
        </div>
    }
    render() {
        const m = this.props.member;
        console.log("tra", this.state.trainer)

        return (
            <div className="row">


                <Tabs className="col-md-12 panel panel-primary">
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
                                    <img className="img-responsive" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=180&h=300&dpr=2&auto=compress&cs=tinysrgb" alt="" />
                                </aside>
                                <content className="col-sm-9">
                                    <h2><strong> Mobile No:</strong> {m.phone}</h2>
                                    {/* <h2>{m.email}</h2> */}
                                    <h2><strong>Gender: </strong>{m.gender}</h2>
                                    <h2><strong>Trainer Name: </strong>{this.state.trainer.trainer_name}</h2>
                                    <h2><strong>Trainer Number:</strong> {this.state.trainer.trainer_number}</h2>
                                    <h2><strong>Package Name: </strong>{this.state.pack.package_name}</h2>
                                    <h2><strong>Birthday: </strong>{m.dob}</h2>
                                    <h2><strong>Package Expire Date: </strong>{m.expiringdate}</h2>
                                    <h2><strong>Joining Date: </strong>{m.joiningdate}</h2>
                                </content>
                            </TabPanel>
                            <TabPanel>
                                {this.renderExcersizeList()}
                            </TabPanel>
                            <TabPanel >
                                {this.renderFoodChartList()}
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { member } = state;

    return { member }
}

const mapDispatchToProps = {
    fetchSingleMemberData
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailsPage)



