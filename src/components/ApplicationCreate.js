import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class ApplicationCreate extends Component {
  nameValue;

  handleOnNameChange = (ev) => {
    this.nameValue = ev.target.value;
  }

  handleOnCancelClick = (ev) => {
    this.props.history.push('/applications');
  }

  handleOnSaveClick = (ev) => {
    if (!this.nameValue) {
      return;
    }

    this.props.addApplication({ name: this.nameValue })
      .then(() => this.props.history.push('/applications'));
  }

  render() {
    return (
      <div>
        <h3>Application Create</h3>

        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          onChange={this.handleOnNameChange}
        />

        <br /><br />

        <FlatButton label="Cancel" onClick={this.handleOnCancelClick} />
        <RaisedButton label="Guardar" primary={true} onClick={this.handleOnSaveClick} />
      </div>
    );
  }
}

ApplicationCreate.propTypes = {
  addApplication: PropTypes.func.isRequired,
};

export default ApplicationCreate;