import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addApplication } from '../actions'
import ApplicationCreate from '../components/ApplicationCreate'

const mapDispatchToProps = (dispatch, ownProps) => ({
  addApplication: (application) => dispatch(addApplication(application))
})

export default connect(null, mapDispatchToProps)(ApplicationCreate)