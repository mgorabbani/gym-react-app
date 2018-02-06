import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";

class AddMemberForm extends React.Component {
  state = {
    data: {
      email: "e@e.com",
      name: "Dipto",
      dob: "2018-2-2",
      phone: "2345678",
      address: "asdf asf sdfdsf",
      extranote: "sdfdsf ",
      package: "1",
      trainer: "1",
      joiningdate: "2018-2-2",
      expiringdate: "2018-2-2",
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    console.log('err', errors)
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.name) errors.name = "Can't be blank";
    if (!data.dob) errors.dob = "Can't be blank";
    if (!data.phone) errors.phone = "Can't be blank";
    if (!data.dob) errors.dob = "Can't be blank";
    if (!data.address) errors.address = "Can't be blank";
    if (!data.extranote) errors.extranote = "Can't be blank";
    if (!data.package) errors.package = "Please choose a package";
    if (!data.trainer) errors.trainer = "Please assign a trainer";
    if (!data.joiningdate) errors.joiningdate = "Please enter Joining date";
    if (!data.expiringdate) errors.expiringdate = "Please enter expiring date";




    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              value={data.name}
              onChange={this.onChange}
              className={
                errors.name ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={this.onChange}
              className={
                errors.phone ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.phone}</div>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
              className={
                errors.email ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={data.dob}
              onChange={this.onChange}
              className={
                errors.dob ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.dob}</div>
          </div>
          <div className="form-check col-md-6">
            <label htmlFor="dob">Gender</label><br />
            <div className="form-check-inline" style={{ marginLeft: 20 }}>
              <input className="form-check-input" type="radio" name="gender" id="dob1" value={data.gender}
                onChange={this.onChange} checked default />
              <label htmlFor="dob1">Male</label>
              <div className="invalid-feedback">{errors.gender}</div>
            </div>
            <div className="form-check-inline" style={{ marginLeft: 20 }}>
              <input className="form-check-input" type="radio" name="gender" id="dob2" value={data.gender} onChange={this.onChange} />
              <label htmlFor="dob2">Female</label>
            </div>
            <div className="invalid-feedback">{errors.gender}</div>
          </div>
          <div className="form-check col-md-6">
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" rows="2" value={data.address} className="form-control" onChange={this.onChange}></textarea>
            <div className="invalid-feedback">{errors.address}</div>
          </div>
          <div className="form-check col-md-6">
            <label htmlFor="extranote">Extra Note</label>
            <textarea name="extranote" id="extranote" rows="2" className="form-control" value={data.extranote} onChange={this.onChange}></textarea>
            <div className="invalid-feedback">{errors.extranote}</div>
          </div>
        </div >
        <div className="row">
          <div className="col-md-12">
            <h3>Additinal Details</h3>
            <hr />
          </div>
          <div className="form-check col-md-6">
            <label htmlFor="address">Package</label>
            <select name="package" className="form-control" onChange={this.onChange} value={data.package} required>
              <option value="">Select Package</option>
              <option value="0">1 Month Package</option>
              <option value="1">3 Month Package</option>
              <option value="2">6 Month Package</option>
              <option value="3">1 year Package</option>
            </select>
          </div>
          <div className="form-check col-md-6">
            <label htmlFor="address">Trainer</label>
            <select name="trainer" required className="form-control" onChange={this.onChange} value={data.trainer}>
              <option value="">Select Trainer</option>
              <option value="1">Proval Hossain</option>
              <option value="2">Rubel Hossain</option>
              <option value="3">Istiak Ahmed</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="dob">Joining Date</label>
            <input
              type="date"
              id="joiningdate"
              name="joiningdate"
              value={data.joiningdate}
              onChange={this.onChange}
              className={
                errors.joiningdate ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.joiningdate}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="dob">Expiring Date</label>
            <input
              type="date"
              id="expiringdate"
              name="expiringdate"
              value={data.expiringdate}
              onChange={this.onChange}
              className={
                errors.expiringdate ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">{errors.expiringdate}</div>
          </div>

        </div>



        <button type="submit" className="btn btn-primary mb-2">
          Add Member
        </button>

      </form >
    );
  }
}

AddMemberForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default AddMemberForm;
