import React from 'react'
import PropTypes from 'prop-types'

const ApplicationItem = ({ application }) => (
  <div >
    {application.name}
  </div>
)

ApplicationItem.propTypes = {
  application: PropTypes
    .shape({ name: PropTypes.string.isRequired })
    .isRequired,
}

export default ApplicationItem