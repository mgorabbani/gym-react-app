import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddMemberForm from "../forms/AddMemberForm";
import { addMember } from "../../actions/members";

class AddMemberPage extends React.Component {
    submit = data =>
        this.props.addMember(data).then(() => this.props.history.push("/dashboard/members"));

    render() {
        console.log("listtt", this.props)
        return (
            <div className="row card">
                <h2 className="card-header">Add New Member</h2>
                <div className="card-body">
                    <AddMemberForm submit={this.submit} user={this.props.user} />
                </div>
            </div>
        );
    }
}

AddMemberPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    addMember: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}
export default connect(mapStateToProps, { addMember })(AddMemberPage);
