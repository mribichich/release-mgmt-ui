import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DevTools from './DevTools'
// import routes from '../routes'
import App from './App'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      {/*<BrowserRouter routes={routes}/>*/}
      <BrowserRouter>
        <MuiThemeProvider>
          <App style={{ width: 900 }} />
        </MuiThemeProvider>
      </BrowserRouter>
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root