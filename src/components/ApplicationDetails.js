import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

const Loading = () => (<div>Loading...</div>)

const Details = ({ application }) => (
  <div>
    <h2>{application.name}</h2>

    <h4>Releases</h4>

    <List>
      {/*rightIconButton={iconButtonElement(release)}*/}
      {application.releases.map(release => (
        <ListItem key={release.id}>
          <Link to={`/releases/details/${release.version}`}>
            {release.version}
          </Link>
        </ListItem>
      ))}
    </List>
  </div>
);

class ApplicationDetails extends Component {
  render() {
    const { application } = this.props;

    /*const iconButtonElement = (application) => (
      <IconButton
        touch={true}
        tooltip="Delete"
        onTouchTap={() => this.handleOpen(application)}
      >
        <ActionDeleteForever color={lightBlack} />
      </IconButton>
    );*/

    return (
      <Paper zDepth={2} style={{ padding: 16 }}>
        {application ? <Details application={application} /> : <Loading />}
      </Paper>
    );
  }
}

ApplicationDetails.propTypes = {
  application: PropTypes.object
};

export default ApplicationDetails;