import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddMemberForm from "../forms/AddMemberForm";
import { addMember } from "../../actions/members";

class AddMemberPage extends React.Component {
    submit = data =>
        this.props.addMember(data).then(() => this.props.history.push("/dashboard/find-member"));

    render() {
        return (
            <div className="row card">
                <h2 className="card-header">Add New Member</h2>
                <div className="card-body">
                    <AddMemberForm submit={this.submit} />
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

export default connect(null, { addMember })(AddMemberPage);
