import React, { Component } from 'react'
import { connect } from "react-redux";
import { addPackage, addTrainer, deletePackage, deleteTrainer } from '../../actions/users';
class SettingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            data: {
                package_name: '',
                package_month: '',
                trainer_name: '',
                trainer_number: ''
            }
        }
        this.addTrainer = this.addTrainer.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    addPackage(e) {
        e.preventDefault()
        if (this.state.data.package_month !== '' && this.state.data.package_name !== '') {
            let packa = {
                package_month: this.state.data.package_month,
                package_name: this.state.data.package_name
            }
            this.props.addPackage(packa);
        }
    }
    addTrainer(e) {
        e.preventDefault()
        if (this.state.data.trainer_name !== '' && this.state.data.trainer_number !== '') {
            let trainer = {
                trainer_name: this.state.data.trainer_name,
                trainer_number: this.state.data.trainer_number
            }

            this.props.addTrainer(trainer);
        }


    }
    deletePackage(id) {
        let con = window.confirm("Are you sure?")
        if (con) this.props.deletePackage(id)
    }
    deleteTrainer(id) {
        let con = window.confirm("Are you sure?")
        if (con) this.props.deleteTrainer(id)
    }
    renderPackage() {
        return this.props.user.package_list.map((e, key) => {
            console.log(e, 'package')
            return <li key={key}>{e.package_name}
                <span style={{ fontSize: '1.25em', paddingLeft: '5px', fontWeight: 'bold', color: '#3F51B5' }}>
                    {e.package_month} <small>Month</small>
                </span>
                <a href="#" onClick={() => this.deletePackage(e._id)} className="badge badge-danger " >Delete</a>
            </li>
        })
    }

    renderTrainer() {
        return this.props.user.trainer_list.map((e, key) => {
            console.log(e, 'package')
            return <li style={{ fontSize: '20px', listStyle: 'square' }}>{e.trainer_name} - <span style={{ fontSize: '.75em' }}>{e.trainer_number}</span> <a href="#" onClick={() => this.deleteTrainer(e._id)} className="badge badge-danger " >Delete</a></li>
        })
    }
    render() {
        let { user } = this.props;
        console.log("Setting Page", this.props)
        return (
            <div>

                {user.confirmed && "Not Confirmed"}
                <p>Gym name: {user.gym_name}</p>
                <p>Admin Email: {user.email}</p>
                <p>Admin Username: {user.username}</p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: '30px',
                }}>

                    <section className="card">
                        <h3 className="card-header">Package</h3>
                        <form onSubmit={(e) => this.addPackage(e)} className="card-body">
                            <label htmlFor="add">New Package Name</label>
                            <input type="text" className="form-control" name="package_name" placeholder="1 Month Package" onChange={this.onChange} value={this.state.package_name} />
                            <label htmlFor="add">Month in Number</label>
                            <input type="number" className="form-control" name="package_month" placeholder="1" onChange={this.onChange} value={this.state.package_month} /><br />
                            <input type="submit" value="save" className="btn btn-primary " />
                        </form>
                        <ul>
                            {this.renderPackage()}
                        </ul>
                    </section>
                    <section className="card">
                        <h3 className="card-header">Trainer</h3>
                        <form onSubmit={(e) => this.addTrainer(e)} className="card-body">
                            <label htmlFor="add">New Trainer Name</label>
                            <input type="text" name="trainer_name" className="form-control" placeholder="John Smith" onChange={this.onChange} value={this.state.trainer_name} />
                            <label htmlFor="add">Number</label>
                            <input type="phone" className="form-control" placeholder="018XXXXXXXX" onChange={this.onChange} value={this.state.trainer_number} name="trainer_number" /><br />
                            <input type="submit" value="save" className="btn btn-primary" />
                        </form>
                        <ul>
                            {this.renderTrainer()}
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { addPackage, addTrainer, deletePackage, deleteTrainer })(SettingPage)