import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { List, ListItem } from 'material-ui/List';
import { Route, Link } from 'react-router-dom'
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { lightBlack } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import ApplicationItem from '../components/ProductItem'

class ApplicationsList extends React.Component {
  state = {
    open: false,
  };

  handleOpen = (application) => {
    this.setState({ open: true, applicationToDelete: application });
  };

  handleDeleteDialogCancel = () => {
    this.setState({ open: false });
  };

  handleDeleteDialogAccept = () => {
    this.setState({ open: false });

    this.props.deleteApplication(this.state.applicationToDelete);
  };

  // handleListItemClicked=()=> {
  //                onTouchTap={this.handleListItemClicked}

  // }

  render() {
    const { applications } = this.props;

    const iconButtonElement = (application) => (
      <IconButton
        touch={true}
        tooltip="Delete"
        onTouchTap={() => this.handleOpen(application)}
      >
        <ActionDeleteForever color={lightBlack} />
      </IconButton>
    );

    const deleteDialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleDeleteDialogCancel}
      />,
      <FlatButton
        label="Delete Application"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDeleteDialogAccept}
      />,
    ];

    return (
      <Paper zDepth={2} style={{ padding: 16 }}>
        <h2>Applications</h2>

        <IconButton
          tooltip="Create Application"
          containerElement={<Link to="/applications/create" />}>
          <ContentAdd />
        </IconButton>

        <List>
          {applications.map(application => (
            <ListItem key={application.id}
              rightIconButton={iconButtonElement(application)}>
              <Link to={`/applications/details/${application.name}`}>
                <ApplicationItem
                  key={application.id}
                  application={application} />
              </Link>
            </ListItem>
          ))}
        </List>

        <Dialog
          title="Deleting Application"
          actions={deleteDialogActions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleDeleteDialogCancel}
        >
          Are you sure you want to delete the application?
        </Dialog>
      </Paper>
    )
  }
}

ApplicationsList.propTypes = {
  products: PropTypes.array,
}

export default ApplicationsList