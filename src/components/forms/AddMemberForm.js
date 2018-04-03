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
      gender: "male"
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
      let trainer = this.props.user.trainer_list.filter(e => {
        if (this.state.data.trainer == e._id) return e;
      })

      let pack = this.props.user.package_list.filter(e => {
        if (this.state.data.package == e._id) return e;
      })
      console.log("pack", pack)
      this.state.data = { ...this.state.data, trainer: trainer[0], package: pack[0] }
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
    if (!data.gender) errors.gender = "Can't be blank";
    if (!data.extranote) errors.extranote = "Can't be blank";
    if (!data.package) errors.package = "Please choose a package";
    if (!data.trainer) errors.trainer = "Please assign a trainer";
    if (!data.joiningdate) errors.joiningdate = "Please enter Joining date";




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
            <label htmlFor="address">Gender</label>
            <select name="gender" required className="form-control" onChange={this.onChange} value={data.gender}>
              <option key={1} value='male'>Male</option>
              <option key={2} value='female'>Female</option>
              })}
            </select>
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
              <option value="0">Select Package</option>
              {this.props.user.package_list.map((e, key) => {
                return <option key={key} value={e._id}>{e.package_name}</option>
              })}
            </select>
          </div>
          <div className="form-check col-md-6">
            <label htmlFor="address">Trainer</label>
            <select name="trainer" required className="form-control" onChange={this.onChange} value={data.trainer}>
              <option value="">Select Trainer</option>
              {this.props.user.trainer_list.map((e, key) => {
                return <option key={key} value={e._id}>{e.trainer_name}</option>
              })}
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
