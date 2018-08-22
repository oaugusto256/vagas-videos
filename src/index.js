import React from 'react';
import ReactDOM from 'react-dom';
import VagasVideos from './containers/vagas-videos';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

ReactDOM.render(<VagasVideos />, document.getElementById('root'));
registerServiceWorker();
