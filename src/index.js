import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root';

const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store)

injectTapEventPlugin();

render(
  <Root store={store} />, document.getElementById('root'))

registerServiceWorker();
