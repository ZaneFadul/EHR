import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

var d = new Date();
var weekday = d.getDay();

class AddAppointmentModal extends Component {
  componentDidMount() {
    const options1 = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options1);
  }

  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      tel: "",
      time: "",
      errors: {},
      isSelected: false,
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      tel: this.state.tel,
      time: this.state.time,
    };
    this.props.onAdd(newUser);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal"
        >
          <div className="modal-content">
            <h4>Create New Appointment</h4>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.tel}
                  error={errors.tel}
                  id="tel"
                  type="tel"
                />
                <label htmlFor="tel">Tel</label>
              </div>

              <div className="col s12" style={{ marginTop: "30px" }}>
                <h6>Choose Time</h6>
                <div className="row">
                  <div className="col s12 m4">
                    <p style={{ fontSize: "15px", display: "inline-block" }}>
                      {this.props.availableTime[weekday][0] + "(today)"}
                    </p>
                    {this.props.availableTime[weekday][1].map((item, index) => {
                      return (
                        <label key={index} style={{ display: "block" }}>
                          <input type="checkbox" />
                          <span>{item}</span>
                        </label>
                      );
                    })}
                  </div>
                  <div className="col s12 m4">
                    <p style={{ fontSize: "15px", display: "inline-block" }}>
                      {this.props.availableTime[(weekday + 1) % 7][0]}
                    </p>
                    {this.props.availableTime[(weekday + 1) % 7][1].map(
                      (item, index) => {
                        return (
                          <label key={index} style={{ display: "block" }}>
                            <input type="checkbox" />
                            <span>{item}</span>
                          </label>
                        );
                      }
                    )}
                  </div>
                  <div className="col s12 m4">
                    <p style={{ fontSize: "15px", display: "inline-block" }}>
                      {this.props.availableTime[(weekday + 2) % 7][0]}
                    </p>
                    {this.props.availableTime[(weekday + 2) % 7][1].map(
                      (item, index) => {
                        return (
                          <label key={index} style={{ display: "block" }}>
                            <input type="checkbox" />
                            <span>{item}</span>
                          </label>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="modal-close btn btn-large waves-effect hoverable red darken-3"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Cancel
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAppointmentModal;
