import React, { Component } from 'react';

const formContent = [
  'First Name',
  'Last Name',
  'Email',
  'Birthday (MM/DD/YYYY)',
  'Height (cm)',
  'Weight (kg)',
  'Sex (M/F)',
  'Please list any drug allergies',
  'Please list any Operations',
  'Please list any Current Medications',
]
export default class RemediRecord extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("submit")
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {formContent.map((item, index) => {
            return (
              <label key={index}>
                {item}
                <input />
              </label>
        
            );
          })}
          <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Submit
                </button>
        </form>
      </div>
    );
  }
}