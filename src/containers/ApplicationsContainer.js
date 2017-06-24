import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ApplicationsList from '../components/ApplicationsList'
import { getApplications, deleteApplication } from '../actions'

class ApplicationsContainer extends React.Component {
  static propTypes = {
    applications: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <ApplicationsList {...this.props} />
    )
  }
}

const mapStateToProps = state => ({ applications: state.applications.applications })

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProducts: () => dispatch(getApplications()),
  deleteApplication: (application) => dispatch(deleteApplication(application)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer)