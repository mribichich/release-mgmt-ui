import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ApplicationDetails from '../components/ApplicationDetails'
import { getApplications, deleteApplication } from '../actions'

class ApplicationDetailsContainer extends React.Component {
  static propTypes = {
    applications: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <ApplicationDetails {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { application: state.applications.applications.find(f => f.name === ownProps.match.params.name) }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProducts: () => dispatch(getApplications()),
  deleteApplication: (application) => dispatch(deleteApplication(application)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDetailsContainer)